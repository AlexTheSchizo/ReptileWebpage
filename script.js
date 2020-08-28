function openContent(event,topic){
    var optioncontent, options;
    optioncontent = document.getElementsByClassName("content");
    for(var i = 0; i < optioncontent.length ; i++)
    {
        optioncontent[i].style.display = "none";
    }

    options = document.getElementsByClassName("option_choice");
    for(var i = 0; i < options.length ; i++)
    {
        options[i].className = options[i].className.replace(" active","");
    }

    document.getElementById(topic).style.display = "block";
    event.currentTarget.className += " active";
}


var MenuState = false;

function toggleMenu(){
    let button = document.querySelector('.menu-toggle');

    if(!MenuState)
    {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay").style.zIndex = 70;
        document.getElementById("side-nav").classList.replace("closed","open");
        setTimeout(function() {document.getElementById("menu-table-wrapper").classList.remove("hidden");},200);
        button.classList.add("pressed");
    }
    else{
        document.getElementById("overlay").style.display = "none";
        document.getElementById("side-nav").classList.replace("open","closed");
        document.getElementById("menu-table-wrapper").classList.add("hidden");
        button.classList.remove("pressed");
    }
    MenuState = !MenuState;
}