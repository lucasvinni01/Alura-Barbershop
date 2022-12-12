/* aqui eu tava tentando criar um script para validar os diasxhorários, para que só fossem válidos horários dentro do cronograma
const dia = document.getElementById('data')
console.log(dia.value)*/
function diaminimo() {
    const tempo = new Date()
    const dia = tempo.getDate.value
    console.log(dia)
    const diaatual = document.querySelector('#data')
    diaatual.setAttribute("min", `${dia};`)
    
}