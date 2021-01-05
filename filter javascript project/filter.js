const object = [
    skruf = [
        skrufFreshS2 = {
            name: 'skruf fresh s2',
            portion: 'white',
            flavour: 'mint',
            format: 'slim',
            strength: 'normal',

        },
        skrufPwrS4 = {
            name: 'Skruf PWR Portion S4',
            portion: 'porsjonssnus',
            flavour: 'tradisjonell',
            format: 'slim',
            strength: 'extra strong',
        },
    ],
    general = [
        generalNo3 = {
            name: 'General No3 Klassisk Porsjon',
            portion: 'orginal',
            flavour: 'tradisjonell',
            format: 'porsjonssnus',
            strength: 'orginal',
        },
        generalNo5 = {
            name: 'General No5 White',
            portion: 'white',
            flavour: 'tradisjonell',
            format: 'orginal',
            strength: 'normal',
        },

    ],
    epok = [
        epokNo1IceBlueIntenseS4 = {
            name: 'Epok No1 Ice Blue Intense S4',
            portion: 'all white',
            flavour: 'mint',
            format: 'slim',
            strength: 'extra strong',
        },
        epokNo12FrostyGreenS2 = {
            name: 'Epok No12 Frosty Green S2',
            portion: 'all white',
            flavour: 'mint',
            format: 'nano',
            strength: 'normal',
        }
    ],

]



let showCurrent = '';


function show(choice, number) {
    showCurrent = '';
    if (choice == 'alle') {
        for (let i = 0; i < object.length; i++) {
            for (let j = 0; j < object[j].length; j++) {
                showCurrent += 
                    `
                    <tr>
                    <td>${object[i][j].name}</td>
                    <td>${object[i][j].portion}</td>
                    <td>${object[i][j].flavour}</td>
                    <td>${object[i][j].format}</td>
                    <td>${object[i][j].strength}</td>
                    </tr>
                    `;
            }
        }
    }
    if (choice == 'skruf') {
            for (let j = 0; j < object[number].length; j++) {
                showCurrent += 
                    `
                    <tr>
                    <td>${object[number][j].name}</td>
                    <td>${object[number][j].portion}</td>
                    <td>${object[number][j].flavour}</td>
                    <td>${object[number][j].format}</td>
                    <td>${object[number][j].strength}</td>
                    </tr>
                    `;
            }
        }
        if (choice == 'general') {
            for (let j = 0; j < object[number].length; j++) {
                showCurrent += 
                    `
                    <tr>
                    <td>${object[number][j].name}</td>
                    <td>${object[number][j].portion}</td>
                    <td>${object[number][j].flavour}</td>
                    <td>${object[number][j].format}</td>
                    <td>${object[number][j].strength}</td>
                    </tr>
                    `;
            }
        }
        if (choice == 'epok') {
            for (let j = 0; j < object[number].length; j++) {
                showCurrent += 
                    `
                    <tr>
                    <td>${object[number][j].name}</td>
                    <td>${object[number][j].portion}</td>
                    <td>${object[number][j].flavour}</td>
                    <td>${object[number][j].format}</td>
                    <td>${object[number][j].strength}</td>
                    </tr>
                    `;
            }
        }
    
    updateView();
}


updateView()
function updateView() {
    let html = '';
    html = `
    <body>
    <div id="navigationBar">
    <div class="grid-item">Home</div>
    <div class="grid-item">Snus</div>
    
    <div class="buttonBackboard">
        <div class="button" onclick="show('alle')">alle</div>
        <div class="button" onclick="show('skruf', 0)">Skruf</div>
        <div class="button" onclick="show('general', 1)">General</div>
        <div class="button" onclick="show('epok', 2)">Epok</div>
    </div>
    </div>
    </body>
  
    <table>
        <tr>
        <th>Name</th>
        <th>Portion</th>
        <th>Flavour</th>
        <th>format</th>
        <th>strength</th>
        </tr>
        ${showCurrent}
    </table>

    
    
    `;

    document.getElementById('app').innerHTML = html;
}


// Sett heller verdi på en variabel enn å endre direkte, ha en funksjon som styrer dette.