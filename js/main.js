const father = document.querySelector('.father');
let square = document.querySelector('.square')

for (let index = 1; index <= 100; index++){
   father.innerHTML += `<div class="square square-${index}">${index}</div>`;

   if((index%5==0) && (index%3==0)){
      //square.classList.add("square-both");
   }else if(index%5==0){
      //square.classList.add("square-five");
   }
   else if(index%3==0){
      //square.classList.add("square-three");
   }
}