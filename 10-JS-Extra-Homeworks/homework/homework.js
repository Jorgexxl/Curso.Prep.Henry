// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz=[];
  for(let key in objeto){
    matriz.push([key,objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*const objeto={ };
  const editor=string.split('');
  var cantidad=0;

  for(let i=0; i<editor.length; i++){
    const letra=editor[i];
    for(let k=0; k<editor.length; k++){ 
      if(letra===editor[k]){
        cantidad+=1;
      }
    }
    if(objeto.letra===undefined){
      objeto.letra=cantidad;
      cantidad=0;
    }
  }
  return objeto;
  for(let i=0; i<string.length; i++){//i=0
    var letra=string.charAt(i);//a
    for(let key in objeto){
      if(letra===key){
        objeto.letra+=1;
      }else{
          objeto.letra=1;
        }
      }
    }
  return objeto;*/
  
  var objeto={ };
  var array=string.split('');

  for (let i = 0; i < array.length; i++) {
    if(objeto[array[i]]===undefined){
      objeto[array[i]]=1;
    }else{
      objeto[array[i]]+=1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.if(objeto.letra === undefined)
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var new_palabra='';

  for(let i=0; i<=s.length; i++){
    if(s.charAt(i)===s.charAt(i).toUpperCase()){
      new_palabra=new_palabra+s.charAt(i);
    }
  }
  for(let i=0; i<=s.length; i++){
    if(s.charAt(i)!==s.charAt(i).toUpperCase()){
      new_palabra=new_palabra+s.charAt(i);
    }
  }
  return new_palabra;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  const editor= str.split(' ');
  const nueva_frase= editor.map(function(elem){
    var nueva_palabra='';
    for(let i=elem.length-1; i>=0; i--){
      nueva_palabra+=elem.charAt(i)
    }
    return nueva_palabra;
  });
  return nueva_frase.join(' ');

/*editor.forEach(function(elem){
    for(let i=elem.length-1; i>=0; i--){
      nueva_frase+=elem.charAt(i)
    }
  },0);
  return nueva_frase;
*/
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var capicua=0;
  numero_completo=numero;
  var digi;
  //numero= 1232
  while(numero>9){
    dig=numero%10;//1
    numero=Math.floor(numero/10);//1232
    
    capicua=(capicua*10)+dig;//
    //capicua=1
  }
  capicua=(capicua*10)+numero;

  if(capicua===numero_completo){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
  
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var new_cadena='';
  for(let i=0; i<=cadena.length; i++){
    if(cadena.charAt(i)==='a' || cadena.charAt(i)==='b' || cadena.charAt(i)==='c'){
      continue;
    }else{
      new_cadena+=cadena.charAt(i);
    }
  }
  return new_cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //["pera", "manzana", "alcaucil", "papa"] 4  7  8  4
  var dig;
  for(let i=0; i<=arr.length-1; i++){//i=0
    for(let k=i+1; k<=arr.length-1; k++){//k=1
      if(arr[i].length>arr[k].length){
        dig=arr[i];
        arr[i]=arr[k];
        arr[k]=dig;
      }
    }
  }
  return arr;
  /*for(let i=0; i<arr.length-1; i++){
    if(arr[i].length <= arr[i+1].length ){//i=3 7 9
      new_array.push(arr[i]);
    }else{
      dig=arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=dig;
      i--;
    }
  }*/
  return new_array;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const new_array=[];
  for(let i=0; i<=arreglo1.length-1; i++){
    for(let k=0; k<=arreglo2.length-1; k++){
      if(arreglo1[i]===arreglo2[k]){
        new_array.push(arreglo2[k]);
      }
    }
  }
  return new_array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

