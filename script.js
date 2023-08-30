function toggLeMode(){

    //trocando o tema !
    const html = document.documentElement
    html.classList.toggle("light") 
    
    //trocando a img
    //pegar a img
    const img = document.querySelector('#profile img')

    //substituir a img
    if(html.classList.contains("light")){
        img.setAttribute('src', './assets/img2.JPG')
    }else {
        img.setAttribute('src', './assets/img1.JPG')
    }
}