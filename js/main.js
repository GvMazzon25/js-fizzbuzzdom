const father = document.querySelector('.father');
let square = document.quarySelector('.square')

for (let index = 1; index <= 100; index++){
   father.innerHTML += `<div class="square square-${index}">${index}</div>`;

   if((index==5) && (index%3==0)){
     
   }
}