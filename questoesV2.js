// let n1 = 1,  n2 = 0, n3 = 1;
// if(n1>n2 && n1>n3){
//     console.log(`${n1} é número maior!`);
// }else if(n2>n1 && n2>n3){
//     console.log(`${n2} é número maior!`);
// }else if(n3>n1 && n3>n2){
//     console.log(`${n3} é número maior!`);
// }else if(n1==n2 && n1==n3){
//     console.log(`São iguais`);
// }else if(n2==n3){
//     console.log(`N2 ${n2} e N3 ${n3} são iguais`);
// }else if(n1==n3){
//     console.log(`N1 ${n1} e N3 ${n3} são iguais`);
// }else{
//     console.log(`Erro`);
// }
   
function ehMaior(n1, n2, n3){
    if(n1>n2 && n1>n3){
            return n1;
        }else if(n2>n1 && n2>n3){
            return n2;
        }else if(n3>n1 && n3>n2){
            return n3 ;
        }else if(n1==n2 && n1==n3){
            return `São iguais`;
        }else if(n2==n3){
            return `N2 ${n2} e N3 ${n3} são iguais`;
        }else if(n1==n3){
            return `N1 ${n1} e N3 ${n3} são iguais`;
        }else if(n1==n2){
            return `N1 ${n1} e N2 ${n2} são iguais`;    
        }else{
            return `Erro`;
        }
          
}

console.log(ehMaior(8,8,7))

// let idade = 2024 - 1931
// if(idade>=0 && idade<=12){
//     console.log(`Você é uma criança - ${idade}`)
// }else if(idade<=17){
//     console.log(`Você é Jovem - ${idade}`)
// }else if(idade<=59){
//     console.log(`Você é adulto - ${idade}`)
// }else if(idade>=60){
//     console.log(`Você é Idoso - ${idade}`)
// }else{
//     console.log("Entrada invalida!")
// }

function  calcularIdade(anoNascimento){
    let idade = (new Date().getFullYear())-anoNascimento
     if(idade>=0 && idade<=12){
     return 'Você é uma criança'
 }else if(idade<=17){
     return 'Você é Jovem'
 }else if(idade<=59){
     return'Você é adulto'
 }else if(idade>=60){
     return'Você é Idoso'
 }else{
     return"Entrada invalida!"
 }
}
console.log(calcularIdade (1932))

// let dia = "sabado"

// if(dia=="segunda" || dia=="terça" || dia == "quarta" || dia=="quinta" || dia=="sexta"){
//     console.log(`${dia} - dia de Estudar`)
// }else if(dia=="sabado" || dia=="domingo"){
//     console.log(`${dia} - dia de Descansar`)
// }else{
//     console.log("Erro")
// }

function verificarDia(dia){
    let diaSemana = dia.toLowerCase()
    switch(diaSemana){
    case 'sabado':
    case 'domingo':
        return `Pode descansar`
        break
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        return `Pode estudar você não é herdeiro!`
        break
    default:
        return `Entrada inválida`
        break    
    }

}

console.log(verificarDia("sabado"))

// let tempo = {hora: new Date().getHours(), minutos: new Date().getMinutes()}
// // tempo.hora=18
// // tempo.minutos =1
// if (tempo.hora>=6 && tempo.hora<=18){
//     if (tempo.hora==18 && tempo.minutos>0){
//     console.log("É Noite")
//     return
//     }
//     console.log("É Dia")
// }else{
//     console.log("Noite")
// }

function diaNoite(hora){

    if (hora>=6 && hora<=17){
             
             
             return "É Dia"
         }else{
             return "Noite"
         }
    }

console.log(diaNoite(17))

module.exports = {ehMaior, calcularIdade, verificarDia, diaNoite}

