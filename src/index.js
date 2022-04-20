const myListDiv = document.getElementById('list');
const myHobbies = ['Music', 'Video Games', 'Watching Interviews' ]
const myHobbyList = document.getElementById('hobbies')

function addname(name) {
    const h1 = document.createElement('h1');
    h1.innerText = name;
    h1.className = 'hob-list';
    myHobbyList.appendChild(h1);

}

// addname('Ricky 2');

myHobbies.forEach(hobby => {
    addname(hobby);

} )