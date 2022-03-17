function tocaSom (idElementoAudio) {
   const elemento = document.querySelector(idElementoAudio); 
   
   if (elemento && elemento.localName === 'audio' ){    
      elemento.play();
      
   }
   else{
      alert('Elemento  não encontrado ou seletor inválido')
   }
}


const listaDeTeclas = document.querySelectorAll('.tecla');
//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
   
   const tecla = listaDeTeclas[contador]

   const instrumento = tecla.classList[1];
   
   const idAudio = `#som_${instrumento}`;//`#som_${ìnstrumento}`; =>>> é uma template string

   tecla.onclick = function(){
     tocaSom(idAudio); 
   }

   tecla.onkeydown = function (evento){
      console.log(evento)

      if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter' ){
         tecla.classList.add('ativa');
      } 

   } 

   tecla.onkeyup = function (){
      tecla.classList.remove('ativa')
   }

}