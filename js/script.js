$(document).ready(function(){

        /** Navbar **/

     var nav = $('nav');
     var toggle=$(".toggle-btn");

     toggle.click(function(){
            nav.toggleClass('active');
     });


     /** FOOTER YEAR  **/

    var date=new Date().getFullYear();
    $('#year').text(date);

    /** GSAP ANIMATIONS **/

    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

    var titles=gsap.utils.toArray([$(".title-text h1"),$(".title-text p")]);

    titles.forEach((text,i) => {
        ScrollTrigger.create({
            trigger:text,
            toggleClass:"active",
            start:"top 90%",
            end:"top 10%",
            markers:false
        });
    });

    var products=gsap.utils.toArray($('.single-product'));

    products.forEach((product,i) => {
        ScrollTrigger.create({
            trigger:product,
            toggleClass:"active",
            start:"top 70%",
            end:"bottom 5%",
            markers:false,
        });
    });

    var tl=gsap.timeline({
        defaults:{duration:1},
     });

    tl.from('.logo',{y:-50,ease:"elastic",scale:0})
    .from('.navbar',{x:200,rotation:360,ease:"elastic"})
    .from(".banner-text h1",{y:100,opacity:0,ease:"power2.in"})
    .from(".banner-text p",{y:-100,opacity:0,ease:"bounce"})
    .from(".showcase",
        {
            opacity:0,
            y:50,
            stagger:1,
            scrollTrigger:{
                trigger:".feature",
                start:"top 70%",
                end:"bottom 90%",
                markers:false,
                scrub:1,
                }
        })
    .from(".feature-img img",
    {
        borderRadius:"50%",
        scale:0,
        x:150,
        toggleActions:"play reverse restart  none",
        scrollTrigger:{
            trigger:".feature-img",
            start:"top 65%",
            end:"bottom 75%",
            markers:false,
            scrub:1,
            }
    })
    .from(".swiper-slide",
    {
        x:-50,
        opacity:0,
        stagger:{
            each:0.5,
            from:"left",
            
        },
        scrollTrigger:
            {
                trigger:".swiper-container",
                start:"top 50%",
                end:"70% 90%",
                markers:false,
                toggleActions:"play pause reverse reset",
                scrub:1
            },
    })

    /**GSAP ScrollTo**/

    $(".product-btn").click(function(){
        gsap.to(window,{duration:4,scrollTo:'#products'});
    });

    /** Swiper **/

    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      });

});


