// let hora = new Date().getHours()


// if (hora >= 6 && hora<18 ){
    // console.log("É dia")
// }else{
// console.log("É noite")
// }

//Transformando em objeto
let tempo = {hora: new Date().getHours(), minutos: new Date().getMinutes()}
// tempo.hora=18
// tempo.minutos =1
if (tempo.hora>=6 && tempo.hora<=18){
    if (tempo.hora==18 && tempo.minutos>0){
    console.log("É Noite")
    return
    }
    console.log("É Dia")
}else{
    console.log("Noite")
}