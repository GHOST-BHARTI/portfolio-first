tl=gsap.timeline();
tl.from("#heading",{
    x:-150,
    duration:0.7,
    opacity:0,
    delay:0.6,
})
tl.from("#name",{
    x:-100,
    duration:0.7,
    opacity:0,
    delay:-0.2,
})
tl.from("#intro-para h6",{
    x:-100,
    duration:0.7,
    opacity:0,
    delay:-0.2,
})
tl.from("#intro button",{
    duration:0.7,
    opacity:0,
    delay:-0.3,
})

pl = gsap.timeline();
// pl.from("#img1",{
//     x:-200,
//     duration:1,
//     opacity:0
// },'a')
// pl.from("#img2",{
//     x:200,
//     duration:1,
//     opacity:0
// },'a')
// pl.from("#right h1",{
//     x:100,
//     duration:1,
//     opacity:0
// },'a')
// pl.from("#left h1",{
//     x:-100,
//     duration:1,
//     opacity:0
// },'a')
// pl.from("#right h5",{
//     x:100,
//     duration:1,
//     opacity:0
// },'a')
// pl.from("#left h5",{
//     x:-100,
//     duration:1,
//     opacity:0
// },'a')
gsap.from("#img1",{
    scale:0,
    x:-200,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#right-top",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 40%",
        scrub:2,
    }
})
gsap.from("#img2",{
    scale:0,
    x:200,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#right-top",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 40%",
        scrub:2,
    }
})
gsap.from("#img3",{
    scale:0,
    x:-200,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#right-bottom",
        scroller:"body",
        // markers:true,
        start:"-20% 100%",
        end:"-20% 40%",
        scrub:2,
    }
})
gsap.from("#img4",{
    scale:0,
    x:200,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#right-bottom",
        scroller:"body",
        // markers:true,
        start:"-20% 100%",
        end:"-20% 40%",
        scrub:2,
    }
})
gsap.from("#page2-top h4",{
    scale:0,
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-top",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 78%",
        scrub:2,
    }
})
gsap.from("#page2-top h1",{
    scale:0,
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-top",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 72%",
        scrub:2,
    }
})
gsap.from("#page2-top div",{
    scale:0,
    y:200,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-top",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 72%",
        scrub:2,
    }
})
gsap.from("#page2-center-left",{
    scale:1,
    x:-700,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#page2-center-left",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 45%",
        scrub:2,
    }
})
gsap.from("#about-div ",{
    scale:1,
    x:400,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#page2-center-right",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 45%",
        scrub:2,
    }
})
gsap.from("#center-top ",{
    scale:1,
    y:50,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#center-top",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 65%",
        scrub:2,
    }
})
gsap.from("#center-bottom ",{
    scale:1,
    x:200,
    opacity:0,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#center-bottom",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 65%",
        scrub:2,
    }
})