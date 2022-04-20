const myListDiv = document.getElementById('list');
const myHobbies = [
    'Music',
    'Arroz con Pollo',
    'Watching Sports',
    'Catching Up With Friends',
    
 ]


function addName(name) {
    const h1 = document.createElement('h1');
    h1.innerText = name;
    h1.className = 'name';
    myListDiv.appendChild(h1);

}

const newHobby = myHobbies.sort((hobbyA, hobbyB) => {
    if(hobbyA < hobbyB) {return -1;}
    if(hobbyA < hobbyB) {return 1;}
    return 0;
}).forEach(number => addName(number));


