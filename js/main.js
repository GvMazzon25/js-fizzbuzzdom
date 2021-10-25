const father = document.querySelector('.father');

for (let index = 1; index <= 100; index++){
   father.innerHTML += `<div class="square square-${index}">${index}</div>`;
}