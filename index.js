const colors = ['green','red','rgba(133,122,200)','#f15025'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click",function(){
    //get random number betweem 0 -3
    const randoNunber = getRandonNumber()
    document.body.style.backgroundColor = colors[randoNunber]
    color.textContent = colors[randoNunber];
})

function getRandonNumber(){
    return Math.floor(Math.random() * colors.length)
}