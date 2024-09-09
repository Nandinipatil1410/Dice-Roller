
function diceRoller()
{
    const numOfDice = document.getElementById("numOfDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    if(numOfDice > 6)
    {
        diceresult.textContent = "Please enter value less than or equal to 6";
        return;
    }
    for(let i = 0; i < numOfDice; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1;
        // console.log(value);
        values.push(value);
        images.push(`<img src = "diceimg/${value}.png" alt = "Dice ${value}">`);
    }


    diceresult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ")
}