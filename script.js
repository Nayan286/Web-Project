const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function animation(){
    gsap.from(".nav", {
        y:-80,
        duration:0.6,
        delay:0.2
    })
    
    gsap.from(".text1 #stagger1", {
        opacity:0,
        y:50,
        duration:0.7,
        delay:0.2,
        stagger:0.3
    })
    
    gsap.from(".image1", {
        x:150,
        opacity:0,
        duration:0.9,
        delay:0.2,
    })
    
    var tl = gsap.timeline()
    
    tl.from("#btn1", {
        opacity:1,
        y:30,
        duration:0.4,
        delay:1,
    })
    
    tl.from("#btn2", {
        opacity:1,
        y:30,
        duration:0.4,
        delay:0.05,
    })
    
    gsap.from(".section2-content .left", {
        x:100,
        duration:0.7,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:".section2-content .left",
            scroller:".main" 
        }
    })
    
    gsap.from(".section3-content #stagger2", {
        opacity:0,
        y:40,
        duration:0.4,
        stagger:0.3,
        scrub:true,
        scrollTrigger:".section3-content #stagger2"
    })
    
    gsap.from(".section5-content #stagger4", {
        opacity:0,
        y:40,
        duration:0.4,
        stagger:0.3,
        scrollTrigger:{
            trigger:".section5-content #stagger4",
            scroller:".main"
        }
    })
    
    gsap.from(".section5-boxes #white-box", {
        opacity:0,
        x:70,
        delay:0.6,
        duration:0.4,
        stagger:0.2,
        scrollTrigger:{
            trigger:".section5-boxes #white-box",
            scroller:".main"
        }
    })

    gsap.from(".footer1 #stagger5", {
        y:40,
        opacity:0,
        duration:0.6,
        delay:0.2,
        stagger:0.2,
        scrollTrigger:{
            trigger:".footer1",
            scroller:".main"
        }
    })

    gsap.from(".footer2 .numbers", {
        x:70,
        opacity:0,
        duration:0.7,
        delay:1,
        scrollTrigger:{
            trigger:".footer2",
            scroller:".main"
        }
    })
}

animation()