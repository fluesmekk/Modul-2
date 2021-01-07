updateView();
function updateView() {
    model.drawnInfo.drawPollInformation = '';


    viewPolls();

    let html = '';
    html = `
    

    ${model.drawnInfo.drawPollInformation}
    <button onclick="saveChoices()">Lagre</button>
    <div class="savedInfo">
    ${model.drawnInfo.savedPollInformation || ''}
    </div>
    `;

    document.getElementById('app').innerHTML = html;
}
function viewPolls() {
    for (let i = 0; i < model.polls.length; i++) {

        alternatives = '';
        for(let x = 0; x < model.polls[i].alternatives.length; x++) {
            alternatives += `<div class="alternative"><label><input type="radio" onclick="model.polls[${i}].selectedAnswer = this.value" "name="group${i}" value="${model.polls[i].alternatives[x]}"><p class="text">${model.polls[i].alternatives[x]}</p></label></div>`;
        }

        model.drawnInfo.drawPollInformation += `
        <div class="poll">  
            <p>${model.polls[i].question}</p>
            <div>${alternatives}</div>
        
        </div>
        `;
    }
}

function saveChoices() {
    model.drawnInfo.savedPollInformation = '';
    for (let i = 0; i < model.polls.length; i++) {
        model.drawnInfo.savedPollInformation += `
        Question : ${model.polls[i].question}
        <br>
        Answer : ${model.polls[i].selectedAnswer}
        <br>
        <br>
    `;
    }
    updateView();
    
}