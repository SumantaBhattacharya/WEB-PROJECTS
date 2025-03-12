let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = input.value;
  ul.appendChild(item);
  input.value = "";



let delbtn = document.createElement("button")
delbtn.type = "button"; 
delbtn.textContent = "delete"
delbtn.classList.add('delete');
item.appendChild(delbtn)

// delbtn.onclick = function() {
//     item.remove();
//   };


// let deleteBtns = document.querySelectorAll(".delete");
// deleteBtns.forEach(function(delBtn) {
//   delBtn.addEventListener("click", function() {
//     // console.log("deleted");
//     // delBtn.parentElement.remove();
//     this.parentElement.remove();
//     // item.remove();
//   });
// });

// let deleteBtns = document.querySelectorAll(".delete");
// for (const delBtn of deleteBtns) {
//   delBtn.addEventListener("click", function() {
//     // console.log("deleted");
//     delBtn.parentElement.remove();
//     // this.parentElement.remove();
//     // item.remove();
//   });
// }

// document.addEventListener("click", function(event) {
//     event.stopPropagation();
//     if (event.target.classList.contains("delete")) {
//       event.target.parentElement.remove();
//     }
// });

ul.addEventListener("click", function(event){
  if(event.target.nodeName == "BUTTON"){
    event.target.parentElement.remove();
  }
})

});

// Event Delegation - use of bubbling property
// button type attribute has not been set 

// eat and sleep cannot be deleleted in first because these are alreadt defined element in html

// 