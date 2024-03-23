const add = document.getElementById("add")
const istatus = document.querySelector("h3")
let check = 0

add.addEventListener("click",function(){
    if(check === 0){
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        add.innerHTML = "Remove Friend"
        check = 1;
    }
    else if (check === 1){
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        add.innerHTML = "Add Friend"

        check = 0;

    }
})
