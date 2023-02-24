$(document).ready(function(){
    const allContents = $(".accordion_content").hide();

    $("#showbtn").click(function() {
        if($('#id_one').prop('checked')){
            alert("Can't show all contents because checkbox toggle is on! 😄")
            return
        } 
        $("#accordion .accordion_header").each(function(index){
            if(!$(this).is('.active')) $(this).trigger("click");
        })
    })

    $("#collapsebtn").click(function() {
        $("#accordion .accordion_header").each(function(index){
            if($(this).is('.active')) $(this).trigger("click");
        })
    })
    // $('#id_one').prop('checked');
    $('#id_one').change(function() {
        const isOn = $(this).prop('checked');   
        if(isOn){
            $("#accordion .active").each(function(index){
                if(index > 0) $(this).trigger("click");
            })
        }
    })

    $(".accordion_up,.accordion_down").click(function(event){
        event.stopPropagation(); 
        const currentButton = $(this);
        const accordionBlock = currentButton.parent().parent().parent();
        if(currentButton.is(".accordion_up")) accordionBlock.insertBefore(accordionBlock.prev())
        else accordionBlock.insertAfter(accordionBlock.next())
    })
    
    $("#accordion .accordion_block").each(function(index){
        $(this).find(".accordion_header").click(function (){
            // console.log(`${index} is pressed`)
            const content = $(this).parent().find(".accordion_content");
            if($('#id_one').prop('checked') && !$(this).is(".active")) $("#collapsebtn").trigger("click"); 
            $(this).toggleClass("active");
            content.slideToggle();
        })
    })
});