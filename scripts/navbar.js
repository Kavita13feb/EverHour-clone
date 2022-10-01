window.addEventListener('scroll',addBoxshadow);

function addBoxshadow(){
    var navbar=document.getElementById('navbar')
    var scrollValue= window.scrollY
    if(scrollValue <81){
        navbar.classList.remove('boxshadow_navbar')
        console.log("hi")
    }
    else{
        navbar.classList.add('boxshadow_navbar')
        console.log("by")
    }
}