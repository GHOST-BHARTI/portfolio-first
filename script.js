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
    scrollTrigger:{
        trigger:"#right-bottom",
        scroller:"body",
        // markers:true,
        start:"-20% 100%",
        end:"-20% 40%",
        scrub:2,
    }
})