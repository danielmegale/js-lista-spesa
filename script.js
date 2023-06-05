//FOR
const shoppingList = ['Pane','Acqua','Latte','Uova','Fettine'];
const result=document.getElementById('list')
let list=''

//  for(let i=0 ; i<shoppingList.length ;i++){
//     list+=`<li>${shoppingList[i]}</li>`;
//     console.log(list);
// }

//WHILE

let i= 0;
while(i < shoppingList.length){
    console.log(list);
    list+=`<li>${shoppingList[i]}</li>`;
    i++;
}
result.innerHTML+=list;
