document.getElementById("submitBtn").addEventListener('click', function(){
    let clayPrice = document.getElementById("amountOfClay").value * 0.50;
    let copperPrice = document.getElementById("amountOfCopper").value * 2.75;
    let tinPrice = document.getElementById("amountOfTin").value * 6.50;
    let ironPrice = document.getElementById("amountOfIron").value * 5.00;
    let coalPrice = document.getElementById("amountOfCoal").value * 2.50;
    let goldPrice = document.getElementById("amountOfGold").value * 225.00;
    let mithrilPrice = document.getElementById("amountOfMithril").value * 275.50;
    let adamantitePrice = document.getElementById("amountOfAdamantite").value * 945.00;

    let totalPrice = clayPrice + copperPrice + tinPrice + ironPrice + coalPrice + goldPrice + mithrilPrice + adamantitePrice;

    document.getElementById("calculatedCost").innerHTML = `total: $${totalPrice}`;
})