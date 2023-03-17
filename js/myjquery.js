
$(function () {
    // console.log($);
    //$('selector').action()
    // $('p').click(function () {
    //     console.log('you clicked', this);
    // })
    // // $('p').hide();
    // $(this).hide();
    // $('#id').hide;
    // $('.class').hide;
    // there are three main types of selector
    // 1. element selector
    // 2. id selector
    // 3. class selector     
    // elemrnt selector  -this ia=s an ezxample of element seleter.
    // $('p').click();
    //  id selecter - this is example of id electer
    //  $('#second').click();
    //  class selecter - this is example of id electer
    //  $('.odd').click();
    // $('*').click()
    // events in jquery
    // $('p').dblclick(function () {
    //     console.log('you double clicked', this);
    // })
    // $('p').mouseenter(function () {
    //     console.log('you enter', this);
    // })


    // demo of on method

    // $('p').on(
    //     {
    //         click, function() {
    //       console.log('thanks for clicking',this);
    //         },
    //         mouseleave,funtion(){
    //             console.log('mouseleave',this);
    //         }

    //     })
        // $('#wiki').hide(5000,function(){
        //     console.log("hidden");
        // })
        //  $('#wiki').show(1000,function(){
        //     console.log("shown");
        // })
    // $('#but').click(function(){
    //     console.log("but")
    //     $('#wiki').fadeOut(1000)
    //     $('#wiki').fadeIn(1000)
        
    // })

    // $('#but').click(function(){
    //          console.log("but")
    //          $('#wiki').fadeToggle(1000);
    // })
    // $('#wiki').slideDown(1000);
    // $('#wiki').slideUp(1000);
    // $('#wiki').slideToggle(1000);
     $('#wiki').animate({opacity:0.3,
      
       height:'300 px',
       weidht:'350px'
          }, 1000)



})
