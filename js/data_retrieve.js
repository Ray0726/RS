$(document).ready(function () {



  $.get("http://socketio1-socketio1.7e14.starter-us-west-2.openshiftapps.com/abcd1234", function (data, status) {
    spt = data.split(":::");
    $("#icon_load").remove();
    $("#img").attr('src', spt[0]);
    $("#img").show();
    $("#content").html(spt[1]);
  });


});