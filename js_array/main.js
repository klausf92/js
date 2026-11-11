// let dato1 = [
//   ['un', 'per', 'incatenarli.'],
//   ['Anello', 'trovarli,'],
//   ['ghermirli', 'e'],
//   ['gondor', 'mark'],
// ];

// let dato2 = [
//   [['trovarli,']],
//   ['tu,', 'sciocchi'],
//   ['tu,', 'sciocchi', ['padron', 'Sauron']],
//   ['nel', ['fuggite', 'gandalf']],
//   [['domarli,', 'passare'], 'buio']
// ];


// // un anello per domarli, un anello per trovarli, un anello per ghermirli e nel buio incatenarli.

// console.log(
//     dato1[0][0],
//     dato1[1][0],
//     dato1[0][1],
//     dato2[4][0][0],
//     dato1[0][0],
//     dato1[1][0],
//     dato1[0][1],
//     dato1[1][1],
//     dato1[0][0],
//     dato1[1][0],
//     dato1[0][1],
//     dato1[2][0],
//     dato1[2][1],
//     dato2[3][0],
//     dato2[4][1],
//     dato1[0][2]

// );



// .......... Selfwork FUNZIONI 1 ...........


// function playGame(tiri) {
//   let giocatore1 = 0;
//   let giocatore2 = 0;


//   for (let i = 0; i < tiri; i++) {
//     let giocatore1Roll = Math.floor(Math.random() * 6) + 1;
//     let giocatore2Roll = Math.floor(Math.random() * 6) + 1;

//     giocatore1 = giocatore1 + giocatore1Roll;
//     giocatore2 = giocatore2 + giocatore2Roll;
//   }

//     if (giocatore1 > giocatore2){
//       return `Giocatore 1 vince con un punteggio pari a ${giocatore1}`;
//     }else if (giocatore2 > giocatore1){
//       return `Giocatore 2 vince con un punteggio pari a ${giocatore2}`;
//     }else {
//       return "Pareggio!";
//     }
// }

// let tiri = parseInt(prompt(`Quanti tiri devono fare i giocatori?`));
// let risultato = playGame(tiri);
// console.log(risultato);



// .......... Selfwork FUNZIONI 2 ...........


// function FizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 == 0) {
//       console.log("FizzBuzz");
//     }else if (i % 5 == 0) {
//       console.log("Fizz");
//     }else if (i % 3 == 0) {
//       console.log("Buzz");
//     }else {
//       console.log(i);
//     }
//   }
// }

// FizzBuzz(100);



// .......... Selfwork FUNZIONI 3 ...........


function countNumber(num) {
  if(num < 10) {
    return `1 cifra`;
  }else if(num < 100)   {
    return `2 cifre`;
  }else if(num < 1000)  {
    return `3 cifre`;
  }else if(num < 10000) {
    return `4 cifre`;
  }else {
    return `numero troppo grande`;
  }
}

console.log(countNumber(5));
console.log(countNumber(50));
console.log(countNumber(500));
console.log(countNumber(5000));
console.log(countNumber(50000));