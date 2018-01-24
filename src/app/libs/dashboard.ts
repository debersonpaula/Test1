const $ = require('jquery');

$.DashBoard = {};

$.DashBoard.options = {
    dmenuleft: $('.d-menuleft'),
    dheader: $('.d-header'),
    dropdown: $('.dropdown')
};

$.DashBoard.defineDropdown = function(){
    const dropdown = this.options.dropdown.find('> a'),
        dropitem = this.options.dropdown.find('.dropitem');

    console.log('dropdown = ', this.options.dropdown);

    if (dropdown.length && dropitem.length) {
        // add icon to drop toggler
        dropdown.append(' <i class="fa fa-caret-down" aria-hidden="true"></i>');
        // show/hide dropdown menu
        dropdown.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            dropitem.toggle();
            dropdown.toggleClass('active');
        });
        // hide menu if user clicks outside
        $(document).on('click', function (e) {
            if (!dropitem.is(e.target) && dropitem.has(e.target).length === 0){
            dropitem.hide();
            dropdown.removeClass('active');
            }
        });
    } else {
        console.log('Not found dropdown');
    }
};

$.DashBoard.defineMenuToggle = function(){
const dheader = this.options.dheader,
    dmenuleft = this.options.dmenuleft,
    menuToggle = $('<div class="d-menutoggle"></div>'),
    menuClose = $('<div class="d-menuclose"><a href="#">X</a></div>');

    dheader.prepend(menuToggle);
    dmenuleft.prepend(menuClose);
    menuToggle.on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        dmenuleft.addClass('show');
    });
    menuClose.on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        dmenuleft.removeClass('show');
    });
    // hide menu if user clicks outside
    $(document).on('click', function (e) {
        if (!dmenuleft.is(e.target) && dmenuleft.has(e.target).length === 0){
        dmenuleft.removeClass('show');
        }
    });
};

/* ------------------
 * - Implementation -
 * ------------------
 */

$.DashBoard.defineDropdown();
$.DashBoard.defineMenuToggle();

const test1 = $('#test1');

console.log('test1 = ', test1);

test1.click( e => {
    console.log('clicked');
});
