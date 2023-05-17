document.title = "CALCULATOR"

const results = document.getElementById("result")
const ac = document.getElementById("allclear")
const delet = document.getElementById("delet")
const nums = document.querySelectorAll(".num")
const equal = document.querySelector(".equal");

nums.forEach((btn)=>{
    btn.addEventListener('click', function(e){
        results.value += e.target.value
    })
})
equal.addEventListener('click', function(){
    results.value = eval(results.value)
})

ac.addEventListener('click', function(){
    results.value = ""
})

delet.addEventListener('click', function(){
    results.value = results.value.slice(0, -1)
})
