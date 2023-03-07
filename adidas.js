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
  document.getElementById("mySidenav").style.width = "75%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 5 */
function abrirNav5(){
  document.getElementById("mySidenav-5").style.width = "75%";
}

function fecharNav5() {
  document.getElementById("mySidenav-5").style.width = "0";
  document.getElementById("main-5").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 4 */
function openNav4(){
  document.getElementById("mySidenav-4").style.width = "75%";
}

function closeNav4(){
  document.getElementById("mySidenav-4").style.width = "0";
  document.getElementById("main-4").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 3 */
function openNav3(){
  document.getElementById("mySidenav-3").style.width = "75%";
}

function closeNav3() {
  document.getElementById("mySidenav-3").style.width = "0";
  document.getElementById("main-3").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 2 */
function openNav2(){
  document.getElementById("mySidenav-2").style.width = "75%";
}

function closeNav2() {
  document.getElementById("mySidenav-2").style.width = "0";
  document.getElementById("main-2").style.marginLeft= "0";
}

/* navegação lateral para os tênis - 1 */
function openNav1(){
  document.getElementById("mySidenav-1").style.width = "75%";
}

function closeNav1() {
  document.getElementById("mySidenav-1").style.width = "0";
  document.getElementById("main-1").style.marginLeft= "0";
}

/* ler mais - 1 */
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Ler mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Ler menos";
    moreText.style.display = "inline";
  }
}

/* teste adicionar aos favoritos */
