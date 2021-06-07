



// === скыть одно модельное окно, другое показать 

let content = document.getElementById("model2")
let show = document.getElementById("btn-form1")
let hide = document.getElementById("hideContent")

show.addEventListener("click", () => {
    model2.style.display = "block"
})

hide.addEventListener("click", () => {
    content.style.display = "none"
})

// ===



// ====== показать еще часть окна 


function  userProgress(time){
    var start = 0;
    var time = Math.round(time * 1000 / 100);
    var progressElement = document.getElementById('user-progress'); //елемент прогресс бара
    var intervalId = setInterval(function(){ 
        if (start > 100){
            clearInterval(intervalId)
            userProgressCallBack();
        }
        else {
          progressElement.value = start;   
        }  
        
     start++;
    }, time);
} 

function userProgressCallBack(){
    document.querySelector('.hidden-bl').style.display = 'block';
}

userProgress(30);



