function loadItems(){
    return fetch("assets/data.json")
    .then(response => response.json())
    .then(json => json.items)
}
loadItems()

.then(items =>{
    console.log(items)

})
.catch(console.log);