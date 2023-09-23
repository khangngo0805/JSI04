import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const projectSettings = {
    databaseURL: "https://project1-d3ab2-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(projectSettings);
console.log(app);
const database = getDatabase(app);
const shopping = ref(database, "shoppingList");
console.log(shopping);

const shoppingList = document.getElementById("shopping-list");
const button = document.getElementById("add-button")
const userInput = document.getElementById("input-field")

button.addEventListener("click", function () {
    let inputValue = userInput.value;
    console.log(inputValue);
    push(shopping, inputValue);
})
onValue(shopping, function (snapshot) {
    const itemArray = Object.entries(snapshot.val())
    console.log(itemArray)
    clearShoppingList()
    for (let i = 0; i < itemArray.length; i++) {
        let currentItem = itemArray[i]
        
        console.log(currentItem)
       
        render(currentItem)
clearInput()
    }
})
function render(item){

let id = item[0];
let value = item[1];
let newItem = document.createElement('li');
newItem.textContent=value;
shoppingList.appendChild(newItem)
newItem.addEventListener("click", function(){
    let location = ref(database, `shoppingList/${id}`)
    remove(location)
})

}
function clearShoppingList(){
    shoppingList.innerHTML=""
}
function clearInput(){
    userInput.value=""
}