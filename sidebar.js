const button1 = document.querySelector('.button1');

button1.onclick = () => {
    document.querySelector(".endSide").classList.add("apper");
    document.querySelector(".row").classList.add("overlay");
}
const button2 = document.querySelector('.button2');

button2.onclick = () => {
    document.querySelector(".endSide").classList.remove("apper");
    document.querySelector(".row").classList.remove("overlay");
}