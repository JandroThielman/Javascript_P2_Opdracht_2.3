setInterval(document.getElementById("Block").style.animation = "Move 10s linear infinite normal", 100);

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("Block").style.backgroundColor = "#" + randomColor;
  }
  
  Block.addEventListener("click", setBg);
  setBg();
  