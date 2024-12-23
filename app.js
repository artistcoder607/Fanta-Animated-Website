var tl = gsap.timeline({scrollTrigger:{
trigger:".two",
start:"0% 100%",
end:"45% 50%",
scrub: true,
// markers: true
}})

tl.to (".animateCan", {
    top: "115%",
    left: "8%"
}, "orange")

tl.to("#orangeSlice", {
    top: "155%",
    left: "21%"
}, "orange")

tl.to("#orange", {
    top: "168%",
    left: "73%",
    width: "16%"
}, "orange")

tl.to("#leaf", {
    top: "112%",
    left: "80%",
    width: "16%",
    rotate: "165deg"
}, "orange")

tl.to("#leaf-2", {
    top: "112%",
    left: "33%",
    width: "16%",
    rotate: "185deg",
    width: "10%"
}, "orange")

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 100%",
    end:"34% 50%",
    scrub: true,
    // markers: true
    }})

    tl2.to ("#coldDrink", {
        top: "210%",
        left: "41%",
        width: "19%"
    }, "tl2")

    tl2.to ("#orangeSlice", {
        top: "200%",
        left: "41%",
        width: "19%"
    }, "tl2")