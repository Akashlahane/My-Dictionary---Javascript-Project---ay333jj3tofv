let apiStr="https://api.dictionaryapi.dev/api/v2/entries/en/"

let btn = document.getElementById("search")

let userInp = document.getElementById("user-input")

let meaningz= document.getElementById("word-meaning")

let wcard = document.getElementById("word-card")

let wordNeed =document.getElementById("word-input")

let count=0;

btn.addEventListener("click",(event)=>{

    event.preventDefault();
    let str = apiStr +  userInp.value;
    wcard.style.visibility = "visible";
    count++;
    wordNeed.textContent=userInp.value
   // meaningz.textContent=count;

    fetch(str).then( response => { return response.json();})
              .then(data => {
                
                let tc = data[0]["meanings"][0]["definitions"][0]["definition"]
            
                meaningz.textContent =tc;

                localStorage.setItem(userInp.value,tc);
            })

})