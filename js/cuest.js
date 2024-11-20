

var radio1 = document.getElementById("pregunta1");
var radio1_1 = document.getElementById("pregunta1_1");
var radio1_2 = document.getElementById("pregunta1_2");


var radio2 = document.getElementById("pregunta2");
var radio2_1= document.getElementById("pregunta2_1");
var radio2_2 = document.getElementById("pregunta2_2");

var radio3 = document.getElementById("pregunta3");
var radio3_1= document.getElementById("pregunta3_1");
var radio3_2 = document.getElementById("pregunta3_2");

var checkbo1 = document.getElementById("pregunta5");
var checkbo1_1 = document.getElementById("pregunta5_1");
var checkbo1_2 = document.getElementById("pregunta5_2");


function cuestionario(){
    var puntos = 0;
    if(radio1_1.checked){

     puntos++;
   
    }
    if(radio2_2.checked){

        puntos++;
    }
    if(radio3.checked){

        puntos++;
    }


    var selecioncantidad = document.getElementById("comboBox1");

    var respuesta = selecioncantidad.options[selecioncantidad.selectedIndex].text;

   if(respuesta == "derivada"){
      puntos++;

   }

   var selecioncantidad2 = document.getElementById("comboBox2");

   var respuesta = selecioncantidad2.options[selecioncantidad2.selectedIndex].text;

  if(respuesta == "integral"){
     puntos++;

  }

  var selecioncantidad3 = document.getElementById("comboBox3");

  var respuesta = selecioncantidad3.options[selecioncantidad3.selectedIndex].text;

 if(respuesta == "limite"){
    puntos++;

 }


 if(checkbo1_1.checked && !checkbo1.checked){

    puntos = puntos + 0.5;
 }
 
 if(checkbo1_2.checked && !checkbo1.checked){

    puntos = puntos + 0.5;
 }



    alert(puntos);





}


