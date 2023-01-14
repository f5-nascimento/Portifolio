function toogleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img") 

  if(html.classList.contains('light')){
    img.setAttribute(
      "alt",
      "foto de Felippe do Nascimento, de barba, de braços cruzados e aspecto sereno"
    )
  }else{
    img.setAttribute(
      "alt",
      "foto de Felippe do Nascimento, de barba e braços cruzados"
    )
  }

 

}