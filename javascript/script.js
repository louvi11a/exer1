function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML);
    let secondNum = Number(document.getElementById('secondNum').innerHTML);

    let total = firstNum + secondNum;
    let answerElement = document.getElementById("answer");
    
    answerElement.textContent = `${firstNum} + ${secondNum}, equals to ${total}`;
    answerElement.style.fontSize = "24px";
    answerElement.style.fontWeight = "bold";
}

document.getElementById('sumButton').addEventListener("click", displaySum);
