// (」°ロ°)」говнокод
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
const fidein = "fidein 2s forwards";
const fideout = "fideout 2s forwards";
const fideout2 = "fideout2 2s forwards";
const fideout3 = "fideout3 2s forwards";
const monkey = document.querySelector("#monkey");
const blackfooter = document.querySelector("#blackfooter");
const three = document.querySelector("#three-sections");
var section = 1;
var eventt = null;
var where = 0;
var ready = true;
var car = document.querySelector(".car");
go();
sizehtml();
window.addEventListener("resize", go);
document.onkeydown = (e) => {
    if (ready) {
        e = e || window.event;
        if (e.keyCode == "38") {
            upp();
            where = 0;
        }
        else if (e.keyCode == "40") {
            downn();
            where = 0;
        }
    }
};
document.addEventListener("touchstart", function (e) {
    eventt = e;
});
document.addEventListener("touchmove", function (e) {
    if (eventt) {
        if (e.touches[0].pageY - eventt.touches[0].pageY > 0) {
            where = 1;
        } else {
            where = -1
        }
    }
});
document.addEventListener("touchend", function (e) {
    if (ready) {
        if (where > 0) {
            upp();
        }
        else if (where < 0) {
            downn();
        }
        where = 0;
        eventt = null;
    }
});
document.addEventListener("wheel", function (e) {
    where += e.wheelDelta;
    console.log(where)
    if (ready) {
        if ((e.wheelDelta > 0) && (where > e.wheelDelta)) {
            upp();
            where = 0;
            eventt = null;
        }
        else if ((e.wheelDelta < 0) && (where < e.wheelDelta)) {
            downn();
            where = 0;
            eventt = null;
        }
    }
});
function upp() {
    if (section != 1) {
        ready = false;
        myFideOut2("#section" + section);
        section -= 1;
    }
}
function downn() {
    if (section != 6) {
        ready = false;
        myFideOut("#section" + section);
        section += 1;
    }
}
function sizehtml() {
    size = 14
    if (screenWidth >= 768) {
        size = 16
    }
    if (screenWidth >= 1440) {
        size = 18
    }
    document.querySelector('html').style.fontSize = size + 'px';
    window.onload = function () {
        document.querySelectorAll(".size").forEach((el) => {
            if ((el.offsetHeight > el.parentElement.offsetHeight) && (el.offsetHeight != 0)) {
                size = size * 0.85;
                document.querySelector('html').style.fontSize = size + 'px';
            }
        });
    }
}
function changeMonkey(boo = "paused") {
    document.querySelectorAll("#monkey img").forEach((el) => {
        el.style.animationPlayState = boo;
    });
}
function changesizemonkey() {
    if (section == 4) {
        monkey.style.bottom = "70%";
        monkey.style.left = "-25%";
        monkey.style.transform = "scale(1.3)";
        if (screenWidth >= 368) {
            monkey.style.bottom = "50%";
            monkey.style.left = "-10%";
            monkey.style.transform = "scale(1.5)";
        }
    }
    if (section == 5) {
        monkey.style.bottom = "15%";
        monkey.style.left = "15%";
        monkey.style.transform = "scale(1)";
        if (screenWidth >= 368) {
            monkey.style.bottom = "5%";
        }
    }
}
function carrr() {
    if (section == 3) {
        if (screenHeight > screenWidth / 2) {
            document.querySelector(".car-container").style.width = "100%"
            document.querySelectorAll(".car-container .car").forEach((el) => {
                el.style.width = "100%"
            });
        } else {
            document.querySelector(".car-container").style.height = "100%"
            document.querySelectorAll(".car-container .car").forEach((el) => {
                el.style.height = "100%"
            });
        }
        document.querySelector(".car-container").style.width = car.width + "px";
        document.querySelector(".car-container").style.height = car.height + "px";
        list = document.querySelector("#listforcar");
        list.style.width = car.width * 0.4 + "px";
        list.style.height = car.height * 0.3 + "px";
        list.style.top = car.height * 0.15 + "px";
        list.style.left = car.width * 0.3 + "px";
        list.animate([
            { left: car.width * 0.3 + "px" },
            { left: car.width * 0.05 + "px" }
        ], {
            duration: 11000,
            fill: "forwards",
            easing: "steps(11,end)"
        });
        ttt = document.querySelector(".typewriter2");
        list.style.paddingTop = car.height * 0.14 + "px";
        list.style.paddingLeft = car.width * 0.08 + "px";
        ppp = document.querySelector(".typewriter2 p");
        ppp.style.fontSize = car.width * 0.40 / 11 + "px";
    }
    document.querySelector("#monkey").style.height = document.querySelector("#monkey").offsetWidth * 1081 / 564 + "px";
}
function gosize() {
    document.querySelectorAll(".h-100-w-100").forEach((el) => {
        if (el.parentElement.parentElement.offsetHeight > el.parentElement.parentElement.offsetWidth) {
            el.style.height = 'auto';
            el.style.width = '100%';
            if (el.offsetHeight > el.parentElement.offsetHeight) {
                el.style.height = '100%';
            }
        } else {
            el.style.width = 'auto';
            el.style.height = '100%';
            if (el.offsetWidth > el.parentElement.offsetWidth) {
                el.style.width = '100%';
            }
        }
    });
}
function go() {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    min = Math.min(screenWidth, screenHeight);
    document.querySelector("body").style.height = screenHeight + "px";
    document.querySelector("#three-sections").style.height = screenHeight + "px";
    document.querySelectorAll(".three-sections__corner").forEach((el) => { el.style.width = min * 0.25 + "px"; })
    document.querySelector(".three-sections__company").style.top = min * 0.035 + "px";
    document.querySelector(".three-sections__company").style.left = (screenWidth / 2 - document.querySelector(".three-sections__company").offsetWidth / 2) + "px";
    document.querySelector("#tree-sections__container").style.borderTop = min * 0.075 + "px solid #160F05";
    document.querySelector("#tree-sections__container").style.borderBottom = min * 0.075 + "px solid #160F05";
    document.querySelector("#tree-sections__container").style.borderLeft = min * 0.035 + "px solid #160F05";
    document.querySelector("#tree-sections__container").style.borderRight = min * 0.035 + "px solid #160F05";
    document.querySelector("#section4").style.height = screenHeight + "px";
    document.querySelector("#section5").style.height = screenHeight + "px";
    document.querySelector("#section6").style.height = screenHeight + "px";
    gosize();
    sizehtml();
    changesizemonkey();
    carrr();
}
function myFideIn(el) {
    if (section == 3) {
        document.querySelector(".car:last-of-type").style.animationPlayState = "running";
        document.querySelector(".car:nth-of-type(2)").style.animationPlayState = "running";
        setTimeout(() => {
            document.querySelector(".car:last-of-type").style.animationPlayState = "paused";
            document.querySelector(".car:nth-of-type(2)").style.animationPlayState = "paused";
        }, 11500);
    }
    if (section == 4) {
        monkey.classList.remove("d-none");
        monkey.style.animation = fidein;
        changeMonkey()
    }
    if (section == 6) {
        document.querySelector("#contactus").style.animation = "fidein2 3s forwards";
    }
    document.querySelector(el).classList.remove("d-none");
    gosize();
    carrr();
    document.querySelector(el).style.animation = fidein;
    setTimeout(() => { ready = true }, 2000);
}
function myFideOut(el) {
    if (section == 3) {
        three.style.animation = fideout3;
    }
    if (section == 4) {
        blackfooter.classList.remove("d-none");
        blackfooter.style.animation = "fideinfooter 1s 1s forwards";
        changeMonkey("running");
        monkey.style.animation = "gomonkey 3s forwards linear";
        setTimeout(() => {
            changeMonkey();
        }, 3100);
    }
    if (section == 5) {
        changeMonkey("running");
        monkey.style.animation = "gomonkey2 3s forwards linear";
        setTimeout(() => {
            document.querySelector("#hand img").style.animation = "handmonkey 1.5s forwards";
        }, 500);
        setTimeout(() => {
            blackfooter.style.animation = "fideout3 0.5s forwards";
        }, 2500)
        setTimeout(() => {
            document.querySelector(el).classList.toggle("d-none");
            myFideIn("#section" + (section));
        }, 3000);
    } else {
        setTimeout(() => {
            document.querySelector(el).classList.toggle("d-none");
            myFideIn("#section" + (section));
        }, 2000);
    }
    document.querySelector(el).style.animation = fideout;
}
function myFideIn2(el) {
    if (section == 3) {
        three.classList.remove("d-none");
        three.style.animation = fidein;
        document.querySelector(".car:last-of-type").style.animationPlayState = "running";
        document.querySelector(".car:nth-of-type(2)").style.animationPlayState = "running";
        setTimeout(() => {
            document.querySelector(".car:last-of-type").style.animationPlayState = "paused";
            document.querySelector(".car:nth-of-type(2)").style.animationPlayState = "paused";
        }, 11500);
    }
    if (section == 4) {
        changeMonkey("paused");
        monkey.classList.remove("d-none");
        changesizemonkey();
        monkey.style.animation = "fidein 2s forwards";
    }
    if (section == 5) {
        changeMonkey("paused");
        blackfooter.classList.remove("d-none");
        blackfooter.style.animation = "fideinfooter 2s forwards";
        monkey.classList.remove("d-none");
        changesizemonkey();
        monkey.style.animation = "fideinfooter 2s forwards";
    }
    document.querySelector(el).classList.remove("d-none");
    gosize(); carrr();
    document.querySelector(el).style.animation = fidein;
    setTimeout(() => { ready = true }, 2000);
}
function myFideOut2(el) {
    if (section == 4) {
        monkey.style.animation = fideout3;
    }
    if (section == 5) {
        blackfooter.style.animation = fideout2;
        changesizemonkey();
        monkey.style.animation = fideout2;
    }
    document.querySelector(el).style.animation = fideout2;
    setTimeout(() => {
        document.querySelector(el).classList.toggle("d-none");
        myFideIn2("#section" + (section));
    }, 2000);
}