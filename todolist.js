let inputs = document.getElementById("inp");
let listing = document.querySelector(".lists");


function Add(){
    if(inputs.value == ""){
        alert("Please Enter Text")
    }
    else{
        let NewEL = document.createElement("ul");
        NewEL.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`
        listing.appendChild(NewEL);
        inputs.value = "";

        NewEL.querySelector("i").addEventListener("click" , remove);
        function remove(){
            NewEL.remove();
        }
    }
}