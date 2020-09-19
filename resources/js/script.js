$(document).ready(function() {
    
    $('.js--section--feature').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('stickey');
        }
        else{
            $('nav').removeClass('stickey');
        }
    },
    {
        offset:'60px;'
    });
    
    
});