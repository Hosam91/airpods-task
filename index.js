// images elements 
const firstPic = document.querySelector(".first");
const secondPic = document.querySelector(".second");
const thirdPic = document.querySelector(".third");
const rightText = document.querySelector(".rightText");

// text elements

const firstText= document.querySelector(".f-text");
const secondText= document.querySelector(".s-text");


document.addEventListener('scroll', handleScroll)

function handleScroll()
{
    const scrollY = window.scrollY;
    let opacity = 0;
    opacity = scrollY / 820


 
    //showing default picture and setting other pic's opacity to 0 
    if (scrollY === 0 )
    {
        firstPic.style.opacity = 0
        secondPic.style.opacity = 0
        thirdPic.style.opacity = 0
        firstText.style.opacity= 0
        secondText.style.opacity = 0     
        rightText.style.opacity= 0

    }
    
    //changing opacity and showing the second picture and  hiding other picturs
    if ( opacity > 0  && opacity <= 1  )
    {
        secondPic.style.opacity = opacity
        thirdPic.style.opacity = 0

        //handle text opacity with first picture
       //handeld on scroll Y value
        
        firstText.style.opacity = opacity + .6

        if (scrollY>=120 && scrollY<210)
        {
            firstText.style.opacity= 1
            secondText.style.opacity= 0
        }
        if (scrollY > 210)
        {
            firstText.style.opacity = 0
            secondText.style.opacity= opacity+.4
        }
        if (scrollY > 620)
        {
            firstText.style.opacity = 0
            secondText.style.opacity= 0
            rightText.style.opacity= 1
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

