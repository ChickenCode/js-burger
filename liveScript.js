var submitButton = document.getElementById("button");

submitButton.addEventListener("click", function() {
// Stabilisco il prezzo base del panino a 50 e prendo tutti gli elementi di tipo checkbox con class ingredient
    var somma = 50;
    var listaIngredienti = document.querySelectorAll(".ingredient [type='checkbox']")
//per ogni elemento in listaIngrediente, controllo se è checkato. Se si, aggiungo il suo value a somma
    for (i = 0; i < listaIngredienti.length; i++) {
        var ingrediente = listaIngredienti[i];

        if (ingrediente.checked) {
            somma += parseInt(ingrediente.value)
        }
    }

//Creo una serie di codici sconto validi, e una variabile dove prendo il codice sconto digitato dall'utente
    var codiciScontoValidi = ["Banana2000", "Mela3000", "Pera4000"]
    var codiceScontoDigitato = document.getElementById("coupon").value
//Creo un loop che confronta lo sconto digitato con quelli validi. Se si, sottraggo a somma un 20%
    for (i = 0; i < codiciScontoValidi.length; i++) {
        if (codiceScontoDigitato === codiciScontoValidi[i]) {
            somma -= (somma * 0.2)
        } 
    }



// Se il burger non ha nome, mando un alert. Se ce l'ha stampo somma
    var nomeBurger = document.getElementById("name");

    if (!nomeBurger.value) {
        alert("Dai un nome al tuo burger");
    }    else {
        document.getElementById("price").innerHTML = somma
    }
})

