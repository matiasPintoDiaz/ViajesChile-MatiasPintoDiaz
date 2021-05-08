$(document).ready(function(){
    //SmootScroll
    $("a").click(function(event){
        event.preventDefault();

        var seccion = this.hash;

        $("html").animate(
            {
                scrollTop: $(seccion).offset().top - 66,
            },
            800
        )
    });
});