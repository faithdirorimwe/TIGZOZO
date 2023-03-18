var arrows = document.getElementsByClassName('arrow')

 var over = document.querySelectorAll('.over')
 console.log(over);



for(let i =0; i < arrows.length; i++){


    arrows[i].addEventListener('click', () =>{
        over[i].classList.toggle('show')  
        
    })
}


// var arrow = document.getElementById("arrow");

// arrow.onclick = function () {
//     document.body.classList
// }



var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "/img/Icon sun.png"
    } else {
        icon.src = "img/Icon moon.png"
    }
}

