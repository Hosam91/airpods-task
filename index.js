// images elements 
// const firstPic = document.querySelector(".first");
const firstPic = document.querySelector(".first img");
const secondPic = document.querySelector(".second img");
const thirdPic = document.querySelector(".third img");

// text elements

const firstText= document.querySelector(".f-text");
const secondText= document.querySelector(".s-text");
const rightText = document.querySelector(".rightText");


document.addEventListener('scroll', handleScroll)

function handleScroll()
{
    const scrollY = window.scrollY;
    let opacity = 0;
    opacity = scrollY / 820
    // let newSize = 100 - scrollY * 0.1;
    let newSize = 100- scrollY * 0.01;
    //showing default picture and setting other pic's opacity to 0 
    if (scrollY === 0 )
    {
        firstPic.style.opacity = 1
        secondPic.style.opacity = 0
        thirdPic.style.opacity = 0
        firstText.style.opacity= 0
        secondText.style.opacity = 0     
        rightText.style.opacity= 0

    }
    
    //changing opacity and showing the second picture and  hiding other picturs
    if ( opacity => 0  && opacity < 1  )
    {
        firstPic.style.opacity = 1 - opacity
        thirdPic.style.opacity = 0
        secondPic.style.opacity = 0
        //handle picture scale

        firstPic.style.transform = `scale(${newSize/100})`;
        secondPic.style.transform = `scale(${newSize/100})`;
        thirdPic.style.transform = `scale(${newSize/100})`;


        //handle text opacity with first picture
       //handeld on scroll Y value
        firstText.style.opacity = opacity + .6
        if (scrollY < 20 )
        {
            firstText.style.opacity= 0
        }
        if (scrollY>=120 && scrollY<210)
        {
            firstText.style.opacity= 1
            secondText.style.opacity= 0
        }
        if (scrollY > 210)
        {
            firstText.style.opacity = 0
            secondText.style.opacity = opacity + .4
            rightText.style.opacity = 0

        }
        if (scrollY > 620)
        {
            firstPic.style.opacity= 0
            firstText.style.opacity = 0
            secondText.style.opacity= 0
        }
        if (scrollY > 640)
        {
            rightText.style.opacity = 1
            secondPic.style.opacity = opacity -.4
        }
        if (scrollY > 800)
        {
            firstText.style.opacity = 0
            secondText.style.opacity= 0
            rightText.style.opacity= 0
        }
}
    //changing opacity and showing the third picture
    // hide other picturs
    if (opacity > 1 && opacity < 2)
    {
        thirdPic.style.opacity = opacity -.7
        
    }


  
}



// **********************************************

