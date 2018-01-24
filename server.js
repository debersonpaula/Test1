const logger = require("debugtxt");
const decache = require('decache');
const comp = require("tscbuilder");

var server;
start();

/************************************************************/
/************************************************************/
/************************************************************/
function start(){
    /*--------------------------------------------------*/
    WriteLog1('START COMPILATION');
    comp.CompileTSC(__dirname + '/tsconfig.server.json');
    /*--------------------------------------------------*/
    WriteLog1('START SERVER');
    server = require('./bin/main');
    server.StartServer(function(){
        setTimeout(() => {
            runWatch();
        }, 1500);
    });    
}
/************************************************************/
/************************************************************/
/************************************************************/
function runWatch(){
    WriteLog1('RUNNING WATCH');
    var watcher = comp.Watcher(__dirname + '/src-server/',function(){
        logger.writelnR('!FgGreen','Rebuild');
        watcher.close();
        stop();
    });
}
/************************************************************/
/************************************************************/
/************************************************************/
function stop() {
    logger.writelnR('!FgCyan','=== STOPPING SERVER ===');
    server.StopServer(function(){
        // clear cache of server component
        logger.writelnR('!FgBlue','Clear cache of server component');
        decache('./bin/main');
        // restart server
        logger.writelnR('!FgCyan','\nRestarting server...');
        setTimeout(() => {
            start();    
        }, 500);
    });
}
/************************************************************/
/************************************************************/
/************************************************************/

function WriteLog1(str){
    logger.writelnR('!FgCyan','================================================');
    logger.writelnR('!FgCyan','[SERVER] : ' + str);
    logger.writelnR('!FgCyan','================================================');
}
