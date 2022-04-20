const myListDiv = document.getElementById('list');
const myRandomNums = [54,27,69,40,33,99,88 ]
const myHobbyList = document.getElementById('hobbies')

function addName(name) {
    const h1 = document.createElement('h1');
    h1.innerText = name;
    h1.className = 'name';
    myListDiv.appendChild(h1);

}

const numList = myRandomNums.map(number => number*2)
numList.forEach(number => addName(number))


