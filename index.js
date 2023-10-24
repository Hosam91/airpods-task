const firstPic= document.querySelector(".firs")
const secondPic = document.querySelector(".second");
const thirdPic = document.querySelector(".third");


document.addEventListener('scroll', handleScroll)

function handleScroll()
{
    const scrollY = window.scrollY;
    let opacity = 0;
    opacity = scrollY / 820

    //showing default picture and setting other pic's opacity to 0 
    if (scrollY === 0 )
    {
        firstPic.style.opacity =1
       
    }
    
    //changing opacity and showing the second picture and  hiding other picturs
    if (opacity < 1 && opacity > 0)
    {
        secondPic.style.opacity = opacity
        thirdPic.style.opacity = 0
}
    //changing opacity and showing the third picture
    // hide other picturs
    if (opacity > 1.5)
    {
        thirdPic.style.opacity = opacity - 1
        
    }
    
}



// **********************************************

