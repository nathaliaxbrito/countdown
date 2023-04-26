const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

const lancamento = "17 oct 2024"

function countdown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const totalSeg = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(totalSeg/60/60/24)
    const finalHoras = Math.floor(totalSeg/60/60)%24
    const finalMinutos = Math.floor(totalSeg/60)%60
    const finalSegundos = Math.floor(totalSeg)%60

    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}`: tempo
}

countdown()
setInterval(countdown, 1000)