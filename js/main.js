const square = document.querySelection('.father');

for (let index=1; index<=100;1++ ){
   square.innerHtml += <div class = "square">${index}</div>;
}