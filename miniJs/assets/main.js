function loadItems(){
    return fetch('http://127.0.0.1:5500/assets/data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

function createHTMLString(items){
    return `
    <li class="items" data-color="${items.color}" data-type="${items.type}">
        <img src="${items.image}" alt="${items.type}">
        <span>${items.gender} , ${items.size}</span>
    </li>
    `
}

function displayItems(items){
    const container = document.querySelector(".itemsContainer");
    container.innerHTML = items.map(item => createHTMLString(item)).join('')
}

function onButtonClick(event,items){
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;

    if(key == null || value == null){
        return;
    }

    updateItems(items,key,value);
    //items html 요소를 가져와야 하며 dataset 설정을 해줘야한다.
}
function updateItems(items, key, value){
    const itemList = document.querySelectorAll(".items")
    itemList.forEach((item)=>{
        console.log(item.dataset[key] === value)
        if(item.dataset[key] === value){
            item.classList.remove("none")
        }else{
            item.classList.add("none")
        }
    })

}


function setEventListeners(items){
    const buttons = document.querySelector(".btn_container");
    const logo = document.querySelector(".logo");
    
    displayItems(items)
    logo.addEventListener("click", () => displayItems(items))
    buttons.addEventListener("click",event => onButtonClick(event,items));
}





// main
loadItems()
.then(items =>{displayItems(items);setEventListeners(items);})
.catch(console.log);