let divrow=document.getElementById("rowAppend");

function locStorageCard(){

   for( let i=0; i<localStorage.length; i++){
         let str1 = localStorage.key(i);
         let str2 = localStorage[str1];
         let s=`
         <div class="card-header">
             <h1>${str1}</h1>
         </div>
         <div class="card-body">
             <p>${str2}</p>
         </div>
         <div class="btn">
             <i class="fa-solid fa-trash-can"></i>
         </div>`

        let divcard= document.createElement("div");
        divcard.setAttribute("class","card");
        divcard.innerHTML=s;
        divrow.appendChild(divcard);
   }
}

locStorageCard();

//let cnt=0;

divrow.addEventListener("click", (event) =>{
   // cnt++;
   // console.log(cnt,event.target);
    if(event.target.classList.contains("fa-solid")){
          // console.log(true);  
        let a = event.target.parentNode.parentNode;
        let b = a.querySelector("h1");
        let c= b.innerHTML;
        //console.log(c);
        delete localStorage[c];
        a.remove();
    }
    

})