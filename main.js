// let num1 = 45;

// let num2 = 5;

// console.log("il valore della variabile num1 è: " + num1);
// console.log(`il valore della variabile num2 è ${num2}`);

// let stringa = "ciao a tutti";
// console.log(`il valore della variabile stringa è ${stringa}`);

// stringa = "ciao";
// console.log(`il valore della variabile stringa è ${stringa}`);

// // Somma e media 

// let num3 = 1;
// let num4 = 2;
// let num5 = 3;
// let num6 = 4;
// let num7 = 5;

// // let somma = num3 + num4 + num5 + num6 + num7;
// // console.log(somma);

// // let media = somma / 5
// // console.log(media);

// // console.log(`la somma tra i numeri è uguale a ${somma}, la media è uguale a ${media}`);


// // SELFWORK OPERATORI 2 

// let annodinascita = 1992;
// let annocorrente = 2026;

// let età = annocorrente - annodinascita;
// console.log(età);


// let annimancanti = 100 - età;
// console.log(annimancanti);

// console.log(`Hai ${età} anni e mancano ${annimancanti} anni per compierne 100`);


// // SELFWORK OPERATORI 3

// let num8 = parseInt(prompt("inserisci il primo numero"));
// let num9 = parseInt(prompt("inserisci il secondo numero"));

// let somma = num8 + num9
// let sottrazione = num8 - num9
// let divisione = num8 / num9
// let moltiplicazione = num8 * num9
// let potenza = num8 ** num9
// console.log(` somma = ${somma}, sottrazione ${sottrazione}, divisione ${divisione}, moltiplicazione ${moltiplicazione}, potenza ${potenza} `); 


// SELFWORK OPERATORI 4

// let numgattitotali = 44;
// let numgattiinfila = 6;

// let numfile = Math.floor (numgattitotali / numgattiinfila); // numero file 7  
// console.log(numfile);

// let rimastifuori = (numgattitotali % numgattiinfila); // numero rimasti 2
// console.log(rimastifuori);

// let nummancanti = (numgattiinfila - rimastifuori); // numero mancanti per completare la fila 4
// console.log(nummancanti);

// console.log(`Ci sono ${numfile} file di gatti e ne mancano ${nummancanti} per una nuova fila, con un avanzo di ${rimastifuori}`);


// .......... SELFWORK  V O T O  - con IF e Switch ..........

// let voto = 28;

// if(voto <= 18) {
//     console.log("insufficente");
    
// }else if(voto > 18 && voto <= 21){
//     console.log("sufficente");
    
// }else if(voto > 18 && voto <= 24){
//     console.log("buono");
    
// }else if(voto > 24 && voto <= 27){
//     console.log("distinto");
    
// }else if(voto > 27 && voto <= 29){
//     console.log("ottimo");
    
// }else if(voto == 30){
//     console.log("eccellente");
    
// }else{
//     console.log("voto non valido"); 
// }

// let voto = 22

// let giudizio;

// switch (true) {
   
//     case voto <= 18:
//         giudizio = "insufficente"
//         break;

//     case voto > 18 && voto <= 21:
//         giudizio = "sufficente"
//         break;   

//     case voto > 21 && voto <= 24:
//         giudizio = "buono"
//         break;

//     case voto > 24 && voto <= 27:
//         giudizio = "distinto"
//         break;

//     case voto > 27 && voto <= 29:
//         giudizio = "ottimo"
//         break;

//     case voto == 30:
//         giudizio = "eccellente"
//         break;
    
//     default:
//         giudizio = "voto non valido"

// }
// console.log(giudizio);


    
// .......... SELFWORK  TEMPERATURA - con IF e Switch ..........

// let temperatura = Number(prompt("inserisci temperatura"));

//     if(temperatura <= -10){
//         console.log("copriti, fa molto freddo!");

//     }else if( temperatura <= 0){
//         console.log("oggi fa meno freddo!");
        
//     }else if( temperatura < 20){
//         console.log("non ci sono piu' le mezze stazioni!");

//     }else if( temperatura < 30){
//         console.log("mi da qualcosa da bere!");

//     }else{
//         console.log("lu sulu lu mari lu ientu!");

//     }

// let temperatura = Number(prompt("inserisci temperatura"));

// let descrizione;

// switch (true) {
//     case temperatura <= -10:
//         descrizione = " copriti, fa molto freddo!"
//         break;
//     case temperatura <= 0:
//         descrizione = " oggi, fa meno freddo!"
//         break;
//     case temperatura < 20:
//         descrizione = "non ci sono piu le mezze stagioni!"
//         break;
//     case temperatura < 30:
//         descrizione = " mi dia qualcosa da bere!"
//         break;
//     default:
//         descrizione = " lu sule lu mari lu ientu!"

// }

// console.log(descrizione);


// ......... SELFWORK CICLO 1 ..........

// let num = 2;

// for(let i = 1; i <= 10; i++){
//     console.log(i * num);
    
// }



// ......... SELFWORK CICLI 2 .......... 

// let accumulator = 0
// let counter = 0

// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i);
        
//     }else{
//         accumulator = accumulator + 1
//         counter ++

//     }

// }
// console.log(`accumulator = ${accumulator}`);
// console.log(`counter = ${counter}`);
// console.log(`risultato media = ${accumulator / counter}`);



// ......... SELFWORK CICLI 3 ..........

let scelta;

do{
    scelta = Number(prompt("inserisci il numero della bevanda desiderata: 1 - acqua, 2 - coca cola, 3 - aranciata"));

    switch(scelta) {
        case 1:
            console.log("è stata selezionata l'acqua");
            break;
        case 2:
            console.log("è stata selezionata la coca cola");
            break;
        case 3:
            console.log("è stata selezionata l'aranciata");
            break;
        default:
            console.log("la scelta inserita non è valida. Riprova!");
            
    }
    
}while( scelta <1 || scelta > 3 );














