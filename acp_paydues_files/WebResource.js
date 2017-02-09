

/************Java Script: Added to show pop-up messages*****************/
/********************Included as a resource in a dll********************/
/***So can be consumed in all the forms inheriting from DNN base form***/



function ShowMessageBox(title, msg, width, height) {
 var w_height = $(window).height();
    var w_width = $(document).width();
    $("body").append('<div class="messagepop pop" id="messagepop">' +
                     '<table class="messagepopMainTable">' + 
                     '  <tr class="messagepopTitleRow">' +
                     '      <td width="100%" class="messagepopTitleCell" valign="top" >' + title + '</td>' + 
                     '      <td class="close"></td>' + 
                     '  </tr>' +
                     '  <tr>' +
                     '      <td ' + 'height="' + (height - 55) + '" colspan="2">' +
                     '<div class="messagepopMsg" id="messagepop">' + msg + '</div></td>' + 
                     '  </tr>' +
                     '  <tr>' +
                     '      <td width="100%" colspan="2" align="center">' +
                     '<input type="button" class="messagepopButton" value="Ok"></input></td>' + 
                     '  </tr>' +
                     '</table>' +
                     '</div>');
    $("#messagepop").css({
                'left': w_width/2 - (width/2),
                'top': w_height/2 - (height/2),
                'width': width,
                'height': height
            });
    $(".pop").slideFadeToggle();
}

$(function () {
    $(".close").live('click', function () {
        $(".pop").slideFadeToggle();
        return false;
    });
});

$(function () {
    $(".messagepopButton").live('click', function () {
        $(".pop").slideFadeToggle();
        return false;
    });
});

$.fn.slideFadeToggle = function (easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, "fast", easing, callback);
}; 

