


let groceryList = '';
const object = {
    inputField : '',
    groceryItems : [
        'bread',
        'Milk',
    ],
};

showGrocery();
function showGrocery() {
    groceryList = '';
    for (let i = 0; i < object.groceryItems.length; i++) {
        groceryList += `
        <tr>
            <td>
                ${object.groceryItems[i]} <button onclick="deleteItem(${[i]})">x</button>
            </td>
        </tr>
        `;
    }
    updateView();
}

function submitItems() {
    if (object.inputField == undefined) {
        return;
    }
    object.groceryItems.push(object.inputField);
    object.inputField = undefined;
    showGrocery();
}

function deleteItem(i) {
    object.groceryItems.splice(i, 1);
    showGrocery();
}

updateView();
function updateView() {
    let html = '';
    html = `
<div id="container">
    <div id="groceryInput">
    <br>
    Add grocery Items
    <br>
    <input oninput="object.inputField = this.value" onkeypress="enterPress(event)"></input>
    <br>
    <br>
    <button id="button" onclick="submitItems()">Submit</button>
    </div>

<div id="groceryList">
    <table>
        ${groceryList}
    </table>
</div>

</div>
`;

document.getElementById('app').innerHTML = html;
}

function enterPress(e){
    var key=e.keyCode || e.which;
     if (key==13){
        submitItems();
     }
   }

