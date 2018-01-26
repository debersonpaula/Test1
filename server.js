const logger = require("debugtxt");
// const decache = require('decache');
// const comp = require("tscbuilder");

/*--------------------------------------------------*/
WriteLog1('START SERVER');
const server = require('./bin/main');
server.StartServer(function(){
    WriteLog1('Running');
});  
/************************************************************/
/************************************************************/
/************************************************************/
function WriteLog1(str){
    logger.writelnR('!FgCyan','================================================');
    logger.writelnR('!FgCyan','[SERVER] : ' + str);
    logger.writelnR('!FgCyan','================================================');
}
