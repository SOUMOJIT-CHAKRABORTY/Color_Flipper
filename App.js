const colors = ['maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener("click", function (){
    const randomNumber = getRandomNumber ();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}