$(document).ready(function(){
    var menuBtn=$('#menu-btn');
    var menu=$('#menu');
    var sideNav=$('#side-nav');
    menuBtn.click(function(){
    var rightside=sideNav.css('right');
       if(rightside=='-250px')
       {
           sideNav.css('right','0px');
           menu.attr('src','Images/close.png');
       }
        else
        {
            sideNav.css('right','-250px');
            menu.attr('src','Images/menu.png');
        }
    });
    var date=new Date().getFullYear();
    $('#year').text(date);

    /** GSAP ANIMATIONS **/

    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

    var tl=gsap.timeline({
       defaults:{duration:1},
    })
    tl.from('.logo',{x:-50, opacity:0,ease:"elastic",duration:2})
    .from('#menu-btn',{opacity:0,x:20},"-=0.5")
    .from('.banner-text h1',{opacity:0,y:30,ease:"bounce"},"0.5")
    .from('.banner-text p',{y:-30,opacity:0,ease:"bounce"},"0.5")
    .from('.banner-btn',{opacity:0,ease:"bounce.out",y:-10},"-=0.5")
    .from("#titlefeatures",
        {
            opacity:0,
            y:-50,
            ease:"bounce",
            scrollTrigger:{
                trigger:"#feature",
                start:"top 90%",
                end:"bottom 90%",
                markers:false,
                scrub:1
                }
        })
    .addLabel('features',"-=0.5")
         .from(".showcase",
        {
            opacity:0,
            x:-50,
            stagger:1,
            scrollTrigger:{
                trigger:"#feature",
                start:"top 50%",
                end:"bottom 95%",
                markers:false,
                scrub:1
                }
        },"features")
      .from(".feature-img",
        {
            opacity:0,
            x:100,
            scale:0.5,
            scrollTrigger:{
                trigger:"#feature",
                start:"top 30%",
                end:"bottom 95%",
                markers:false,
                scrub:1,
                }
        },"features")
        .from("#titleproducts",
        {
            opacity:0,
            y:-50,
            ease:"bounce",
            duration:2,
            scrollTrigger:{
                trigger:"#products",
                start:"top 90%",
                end:"bottom 30%",
                markers:false,
                scrub: 1
                }
        })
        .from(".single-product",
        {
            opacity:0,
            scale:0.1,
            stagger:{
                amount:1,
                from:"right",
                grid:"auto",
                ease:"elastic",
            },
            scrollTrigger:{
                trigger:".product-box",
                start:"top 90%",
                end:"+=250",
                toggleActions:"play reverse restart reverse",
                markers:false,
                scrub:1,
                }
        })
        .from("#titletestimonials",{
            scrollTrigger:{
                trigger:"#testimonials",
                start:"top 80%",
                end:"center 80%",
                markers:false,
                toggleActions:"play pause resume reverse",
                scrub: 1
                },
            opacity:0,
            y:-50,
            ease:"bounce",
        })
        .from(".testimonial-col",
        {
            opacity:0,
            x:100,
            rotate:45,
            stagger:1,
            scale:0.1,
            scrollTrigger:
                {
                    trigger:".testimonial-row",
                    start:"top 80%",
                    end:"bottom 90%",
                    markers:false,
                    toggleActions:"play pause resume reverse",
                    scrub:1
                },
        })
        .from('#titlecontact',
            {
                scrollTrigger:{
                trigger:"#footer",
                start:"top 80%",
                end:"center 80%",
                markers:false,
                toggleActions:"play pause resume reverse",
                scrub: 1
                },
            opacity:0,
            y:-50,
            ease:"bounce",
            })
         .from(".footer-left",
             {
                scrollTrigger:{
                        trigger:"#footer",
                        start:"top 80%",
                        end:"center 80%",
                        markers:false,
                        toggleActions:"play pause resume reverse",
                        scrub: 1
                },
                x:-200,
                opacity:0,
         })
          .from(".footer-right",
             {
                scrollTrigger:{
                        trigger:"#footer",
                        start:"top 80%",
                        end:"center 80%",
                        markers:false,
                        toggleActions:"play pause resume reverse",
                        scrub: 1
                },
                x:200,
                opacity:0,
         })
        .from('.button',
        {
             scrollTrigger:{
                    trigger:".footer-row",
                    start:"top 80%",
                    end:"top 70%",
                    markers:false,
                    toggleActions:"play pause resume reverse",
                    scrub: 1
                },
            x:-250,
            opacity:0,
            rotate:360,
            stagger:1,
            duration:3
        })

    /**GSAP ScrollTo**/

    $(".product-btn").click(function(){
        gsap.to(window,{duration:4,scrollTo:'#products'});
    });
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


