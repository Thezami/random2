document.querySelector('.calculate')
    .addEventListener('click', () => {
        calculate();
    });

function calculate (){
    let typeofFace = document.querySelector('.type-of-face-dropdown')
        .value
    console.log(`User selected: ${typeofFace}`);

    let vertex = Number(document.querySelector('.vertex-input')
    .value);
    let edge = Number(document.querySelector('.edge-input')
    .value);
    let face;

    if (typeofFace === "triangular" || typeofFace === "rectangular"){
        face = 2 + edge - vertex;
        console.log(face);
    } else {
        alert(`Please select a type of face.`);
    };

    document.querySelector('.face-calculation')
        .innerHTML = `The topology will have ${face} faces.`
}

