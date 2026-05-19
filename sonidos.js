function reproducirBang() {
    let sonidoOriginal = document.getElementById("sonido-bang");
    let musicaOriginal = document.getElementById("musica-keef");
    
    // Frenamos la música en el acto por si se quiso colar al hacer click
    musicaOriginal.pause(); 
    musicaOriginal.currentTime = 0; 

    // Suena el BANG BANG al toque
    let sonidoClonado = sonidoOriginal.cloneNode();
    sonidoClonado.playbackRate = 1.0; 
    sonidoClonado.play();

    // Esperamos 450 milisegundos (casi medio segundo) y soltamos la música
    setTimeout(() => {
        musicaOriginal.play();
    }, 450); 
}