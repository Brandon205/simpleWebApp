let q1_value = 0;
let q2_value = 0;
let sum;
let a1 = document.getElementById("check1");
let a2 = document.getElementById("check2");
let a3 = document.getElementById("check3");
let arr = [a1, a2, a3];

document.defaultView.addEventListener('click', () => {
    q1_value = parseInt(document.getElementById("firstQuestion").first.value);
    if (q1_value === 100) {
        document.getElementById("secondQuestion").classList.remove("no-show");
        sum = q1_value + q2_value;
    } else {
        document.getElementById("secondQuestion").classList.add("no-show");
        sum = q1_value;
    }
    q2_value = 0
    arr.forEach( (item) => {
        if (item.checked) {
            q2_value += parseInt(item.value);
        }
    })
})

document.getElementById("submit").addEventListener('click', () => {
    event.preventDefault();
    // Here is where we would finish the validations that haven't yet been validated and then send the data to the API (SendToServer)
});

document.getElementById("skip").addEventListener('click', () => {
    location.reload();
})