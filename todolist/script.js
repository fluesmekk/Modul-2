const object = {
    tasks: [
        {
            description: 'Clean Room',
            note: '',
            person: 'Theodor',
            deadline: '05.01.2021',
            done: '',
        },
        {

        },
    ]
}






updateView();
function updateView() {
    let html = '';

    html = `
    <div id="top">Tasks</div>
    <div class="grid-container">
        <div class="item1">task: ${object.tasks[0].description}</div>
        
        <div class="item3">person: ${object.tasks[0].person}</div>  
        <div class="item4">deadline: ${object.tasks[0].deadline}</div>
        <div class="item5">${object.tasks[0].done || ''}</div>
        <div class="item2"></div>
    </div>

    
    
    
    `;
    for (let i = 0; i < object.tasks.length; i++) {
        
    }



    document.getElementById('app').innerHTML = html;
}