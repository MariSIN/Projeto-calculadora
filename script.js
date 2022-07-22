function Calcular(){
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let somar=  Number(num1.value)+Number(num2.value);
let subtrair= Number(num1.value)-Number(num2.value);
let multiplicar= Number(num1.value)*Number(num2.value);
let dividir= Number(num1.value)/Number(num2.value);
let exponencia= Number(num1.value)**Number(num2.value);
let radc= document.getElementsByName('radc');
let calcular = ""
let resultado = document.getElementById('res')

if (radc[0].checked){
calcular = somar

}else if (radc[1].checked){
calcular = subtrair

}else if (radc[2].checked){
calcular = multiplicar

}else if (radc[3].checked){
calcular = dividir

}else if (radc[4].checked){
calcular = exponencia

}
resultado.innerHTML=`Este é o valor da operação: ${calcular} `
res.innerHTML+='\u{1F601}.'
}