/* const = é diferente de VAR.
com VAR, o valor pode ser modificado a qualquer momento.

já com CONST, o valor não pode ser modificado pois da erro.
const = constante */
const carregamento = document.querySelectorAll('.preload')
/* querySelectorAll = é usado para poder chamar +1 classe ou id */
carregamento.forEach((preload) => {
/* forEach = é tipo:
Para cada elemento eu vou dar uma função.

se tiver mais de uma Class, eu posso passar uma função para cada*/
 setTimeout(() => {
  /* setTimeout é usado para fazer o efeito de aparecer o preload pois a função dele é dar um certo delay ou intervalo antes de executar alguma função */
 preload.classList.remove('preload')
 /* classList.() = é usado para algo como:
 
 "quando tal coisa acontecer, remova essa Classe"
 */
 }, 1000)
})
/* tempo para fazer o gif sumir */
setTimeout(function(){gif.style.display='none'; },1000);



/* Defina a largura da barra lateral para 250px e a margem esquerda do conteúdo da página para 250px */
function abrirNav() {
    document.getElementById("mySidebar").style.width = "300px";
  }
  
  /* Defina a largura da barra lateral como 0 e a margem esquerda do conteúdo da página como 0 */
  function fechaNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("icone").style.marginLeft = "0";
    document.getElementById("corpo").style.marginLeft = "0";
  }

/* navegação lateral para os tênis - 6 */
function openNav(){
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 5 */
function abrirNav5(){
  document.getElementById("mySidenav-5").style.width = "100%";
}

function fecharNav5() {
  document.getElementById("mySidenav-5").style.width = "0";
  document.getElementById("main-5").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 4 */
function openNav4(){
  document.getElementById("mySidenav-4").style.width = "100%";
}

function closeNav4(){
  document.getElementById("mySidenav-4").style.width = "0";
  document.getElementById("main-4").style.marginLeft= "0";
}


/* navegação lateral para os tênis - 3 */
function openNav3(){
  document.getElementById("mySidenav-3").style.width = "100%";
}

function closeNav3() {
  document.getElementById("mySidenav-3").style.width = "0";
  document.getElementById("main-3").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 2 */
function openNav2(){
  document.getElementById("mySidenav-2").style.width = "100%";
}

function closeNav2() {
  document.getElementById("mySidenav-2").style.width = "0";
  document.getElementById("main-2").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 1 */
function openNav1(){
  document.getElementById("mySidenav-1").style.width = "100%";
}

function closeNav1() {
  document.getElementById("mySidenav-1").style.width = "0";
  document.getElementById("main-1").style.marginLeft= "0";
}