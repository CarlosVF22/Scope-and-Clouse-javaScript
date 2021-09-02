const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log("MoneyBox: " + saveCoins);
}

moneyBox(5);
moneyBox(10);

// moneyBox con estructura de closure

const moneyBox = () =>{
    var saveCoins = 0;
    const countCoins =(coins) =>{
        saveCoins += coins;
        console.log("moneyBox: " + saveCoins);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4); //4
myMoneyBox(10); //14
myMoneyBox(15); //29 --Recuerda la asiganción--

