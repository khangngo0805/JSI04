
const wrapperbox = document.getElementById('wrapper');
const arr1 = [0, 1, 2, 3, 4, 5, 6];
const btn = document.getElementById(btn                 )

const listanalyse = (arr)=>{
    let child = wrapperbox.lastElementChild;
    arr.forEach((item) => {
        const element = document.createElement("div");
        element.classList.add("box");
        element.textContent = item;
        wrapperbox.appendChild(element);
    })
    
}

const myfunction = () => {
const arr2 = arr1.filter(item => item%2 !== 0);
listanalyse(arr2);
}
btn.addEventListener("click, myfunction")

