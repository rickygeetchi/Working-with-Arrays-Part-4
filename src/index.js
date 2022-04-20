const myListDiv = document.getElementById('list');
const myBooleans = [false, true, false, false, true, false, true ]


function addName(name) {
    const h1 = document.createElement('h1');
    h1.innerText = name;
    h1.className = 'name';
    myListDiv.appendChild(h1);

}

const newBooleans = myBooleans.map(number => !number)
newBooleans.forEach(number => addName(number))


