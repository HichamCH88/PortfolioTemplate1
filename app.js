const saluteTextContainer = document.querySelector(".textContainer")
const saluteImgContainer = document.querySelector(".imgContainer")
const authorName = document.querySelector(".name")
const jobTitleContainer = document.querySelectorAll(".jobTitleContainer")
const jobTitle=document.querySelectorAll(".jobTitle")


window.addEventListener("scroll", () => {
    let offsetY = window.scrollY

    saluteTextContainer.style.transform=`translateY(${offsetY * 0.3}px)`
    saluteImgContainer.style.transform=`translate( ${offsetY * 0.3}px,${offsetY * 0.4}px)`
    authorName.style.transform=`translateX( ${offsetY * 0.12}px)`
    jobTitleContainer[0].style.backgroundPositionY=`${offsetY * 0.05 -50}px`
    //jobTitleContainer[0].style.transform=`rotate(-${offsetY * 0.5}deg)`
    jobTitleContainer[1].style.backgroundPositionY=`${-offsetY * 0.2}px`
    jobTitle[0].style.transform=`translateX(calc(200vh - ${offsetY}px))`
    jobTitle[1].style.transform=`translateX(calc(-300vh + ${offsetY}px))`


}); 