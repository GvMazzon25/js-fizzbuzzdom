const father = document.getElementById('father');
const box = document.getElementsByClassName("box");
console.log(box)

for (let index = 1; index <= 100; index++){
   father.innerHTML += `<div class="box box-${index}">${index}</div>`;

   if((index%5==0) && (index%3==0)){
      console.log(index)
   }else if(index%5==0){
      console.log(index)
   }
   else if(index%3==0){
      console.log(index)
   }
}