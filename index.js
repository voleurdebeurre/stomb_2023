document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(e) {
    const eyesPupils = document.querySelectorAll(".eyes-pupil");
    eyesPupils.forEach(eyePupil => {
        xPercent = parseInt(e.pageX / window.innerWidth * 100);
        yPercent = parseInt(e.pageY / window.innerHeight * 100);
        eyePupil.style.transform = "translate(" + xPercent + "%," + yPercent + "%)";
    });
}


let allSections = document.querySelectorAll("section")

function openNavTarget(target){
    let sectionToggle = document.querySelector("section[data-sectiontarget='" + target +"']")
    allSections.forEach(section => {
        section.classList.remove("sectionShow")
        sectionToggle.classList.remove("animate__slideInDown")
    })
    sectionToggle.classList.toggle("sectionShow")
    sectionToggle.classList.toggle("animate__slideInDown")
    // if(target === "video"){
    //     actionsOnVideoTab()
    // }
}

function mobileNavController(){
    let mainNavContainer = document.querySelector(".main-nav")
    mainNavContainer.classList.toggle("nav-show")
    mainNavContainer.classList.toggle("animate__slideInDown")
}