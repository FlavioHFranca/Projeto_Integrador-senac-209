// Instanciando as imagens que estão no html as variaveis
const  imgs = document.getElementById("img"); 
const img = document.querySelectorAll("#img img");



// Contador que se inicia em 0
let id_imgs = 0;

// Função do carrossel 
function carrossel(){ 
    // Adicionando +1 a variaveis 
    id_imgs++

    // condição que ao chegar na ultima imagem retorna para a primeira foto
    if(id_imgs > img.length - 1){
        id_imgs = 0;
    }

    // Pega o tamanho da imagem
    const imgSize = img[id_imgs].offsetWidth;
    
    // ajeita a imagem pro tamanho
    img[id_imgs].style.width = imgSize;

    // Animação de passagem ( o quanto a variável irá passar para a direita)
    imgs.style.transform = `translatex(${-id_imgs * imgSize}px)`;
    if (imgSite < 680){
        imgs.style.transform = `translatex(${-id_imgs * 499}px)`;
    }

}  

// chamando a função do carrossel e adicionando o tempo em ms (2000ms = 2s)
setInterval(carrossel,2000);

