
const data= new Date()
var dia = data.getDate()
var h = data.getHours()
var nome_completo = 'Sou o Raphael Ferreira Monteiro'
var f = data.getDay()
var curso = 'Sp/ADS'
var br='\n'

if (h>=6 && h<=11){
    var buenos = 'Bom Dia!'
}
if (h>=12 && h<=17){
    var buenos = 'Boa Tarde!'
}
if (h>=18 || h<=5){
    var buenos = 'Boa Noite!'
}

if (f==0){
    var feira = ' Hoje é domingo'
}
if (f==1){
    var feira = ' Hoje é segunda-feira'
}
if (f==2){
    var feira = ' Hoje é terça-feira'
}
if (f==3){
    var feira = ' Hoje é quarta-feira'
}
if (f==4){
    var feira = ' Hoje é quinta-feira'
}
if (f==5){
    var feira = ' Hoje é sexta-feira'
}
if (f==6){
    var feira = ' Hoje é sábado'
}



window.alert(nome_completo + br + curso + br + buenos + feira)

