document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(e) {
    const eyesPupils = document.querySelectorAll(".eyes-pupil");
    eyesPupils.forEach(function(eyePupil) {
        xPercent = parseInt(e.pageX / window.innerWidth * 100);
        yPercent = parseInt(e.pageY / window.innerHeight * 100);
        eyePupil.style.transform = "translate(" + xPercent + "%," + yPercent + "%)";
    });
}


let allSections= document.querySelectorAll("section")
function openNavTarget(target){
    let sectionToggle = document.querySelector("section[data-sectiontarget='" + target +"']")
    allSections.forEach(section => {
        section.classList.remove("sectionShow")
    })
    sectionToggle.classList.toggle("sectionShow")
}