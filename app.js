

let result = document.querySelector('.number');

const x = [];

for(i = 1; i <= 100; i++){
    x.push(i)
}

result.innerHTML = x.join(' ');

function thanks(){
    alert('🙂 Thank You For Clicking 🙂')
}