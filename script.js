


locoScroll()
// document.querySelector('.loader').style.display = "none"
mousefollower()
headerAnimation()
infoDateAnimation()
introSecAnimation()
historicalSecAnime()

function mousefollower() {
    window.addEventListener('mousemove', (dets) => {
        gsap.to('#cursor', {
            x: dets.clientX + 'px',
            y: dets.clientY + 'px',
            zIndex: 9,
            duration: .5,
        })
    })
}


function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("main").style.transform
          ? "transform"
          : "fixed"*/
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
function headerAnimation() {

    let count = 0;
    const interval = setInterval(() => {
        if (count <= 100) {
            document.querySelector('.loader h1').textContent = count;
            count += 4;
        }
        else {
            clearInterval(interval)
            animateNow();
        }
    }, 50);

    function animateNow() {
        const tl = gsap.timeline()
        tl.to(".loader", {
            y: "-100%",
            display: "none",
            duration: .5,
        })

        tl.from("nav", {
            y: '-100',
            duration: 1,
        })
        tl.from(".hero__top-heading h1", {
            y: 110,
            duration: .6,
            stagger: .2,
        },)
        tl.from(".hero__img-overlay", {
            opacity: 0,
            duration: 1,
        },)
    }

    gsap.from(".hero__img-overlay  img", {
        scale: 2,
        duration: 1,
        scrollTrigger: {
            scroller: "main",
            trigger: " .hero__img-overlay",
            // markers: true,
            start: "50% 85%",
            end: "50% 50%",
            scrub: 2,
        }
    })
}

function infoDateAnimation() {
    let year = '1898'
    year.split('').forEach((item, index) => {
        gsap.to(`.hero__num-wrapper:nth-child(${index + 1})`, {
            transform: `translateY(-${item}em)`,
            duration: 2,
            stagger: .5,
            scrollTrigger: {
                scroller: "main",
                trigger: " .hero__num-wrapper",
                // markers: true,
                start: "50% 85%",
                end: "50% 60%",
            }
        })
    });
}

function introSecAnimation() {
    const para = document.querySelector(".intro__desc")
    let clutter = ""
    para.textContent.split("").map((item) => clutter += `<span class="text-3xl">${item}</span>`)
    para.innerHTML = clutter;

    gsap.from(".intro__desc span", {
        opacity: ".5",
        duration: 1,
        stagger: .1,

        scrollTrigger: {
            scroller: "main",
            trigger: " .intro__desc span",
            // markers: true,
            start: "50% 85%",
            end: "50% 30%",
            scrub: 3,
        }
    })
}

function historicalSecAnime() {
    gsap.from(".historical__heading h1", {
        y: 110,
        duration: .6,
        stagger: .2,
        scrollTrigger: {
            scroller: "main",
            trigger: " .historical__heading",
            // markers: true,
            start: "50% 85%",
            end: "50% 30%",
        }
    },)
}



