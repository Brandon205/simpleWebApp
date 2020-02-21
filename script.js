let q1_value = 0;


let q2_value = 0;
let a1 = document.getElementById("check1");
let a2 = document.getElementById("check2");
let a3 = document.getElementById("check3");
let arr = [a1, a2, a3]



document.defaultView.addEventListener('click', () => {
    q1_value = parseInt(document.getElementById("firstQuestion").first.value);
    if (q1_value === 100) {
        document.getElementById("secondQuestion").classList.remove("no-show");
    } else {
        document.getElementById("secondQuestion").classList.add("no-show");
    }
    q2_value = 0
    arr.forEach( (item) => {
        if (item.checked) {
            q2_value += parseInt(item.value);
        }
    })
    console.log(q2_value, q1_value);
})