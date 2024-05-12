let inputs = document.getElementById("inp");
let Listing = document.querySelector(".lists");

 function Add(){
    if(inputs.value == ""){
        alert("Enter the Text")
    }
    else{
        let NEwEL = document.createElement("ul");
        NEwEL.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        Listing.appendChild(NEwEL);

        inputs.value = "";

        NEwEL.querySelector("i").addEventListener("click" , Removebin);
        function Removebin(){
            NEwEL.remove();
        }
    }
 }