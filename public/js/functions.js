/*$(document).ready(function () {

    });*/

$(function(){
    $(".change-lang").each(function(i, v){
       $(v).click(function(){
           //console.log($(this).val());
           $.get( '/index',{ lang: $(this).val() }, function(data) {
               if(data){
                   location.reload();
               }
           });
       });
    });
});