const Hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    let hexColor = "#";

    for (let i = 0; i<6; i++){
        hexColor += Hex[getRandomNumber()] 
    }


    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})


function getRandomNumber () {
    return Math.floor(Math.random()*Hex.length);

}