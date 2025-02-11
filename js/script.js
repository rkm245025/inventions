window.addEventListener("scroll",()=>{
    if(scrollY>70){
        document.getElementById('nav').classList.add("bg-dark");
    }
    else{
        document.getElementById('nav').classList.remove("bg-dark");
    }
})

