// const produtos = document.getElementById("Father");
// const imagem = ["PostalDude1.jpg", "PostalDude1.jpg"];
// const texto = ["O eduardo é fudido", "Teste"];
// const oferta = ["300", "200"];c


const descrition = ["Alva Lorenz", "Chance", "Telamon", "Guest666", "Postal Dude"];
const texto = document.getElementById("father");
const valor = ["1200", "3000", "5000", "200", "70"];
const imagem = ["Alva1.jpg","Chance1.jpg","Telamon1.jpg","Guest666_1.jfif", "PostalDude2.jpg"];


for(let i=0; i < descrition.length; i++){
    texto.innerHTML += `<div id="father" class="father">
    <div class="cartao">
        <div class="imagemproduto">
            <img src="img/imagensProdutos/${imagem[i]}" alt="">
        </div>
        <hr>
            <span>Oferta do dia</span>
            <p class="descricao">${descrition[i]}</p>
            <p class="valor">${valor[i]}</p>
            <p class="chegara">Chegara amanha</p>
    </div>`
}
   // texto.innerHTML += `<div class="caixa"> ${descrition[i]} <br> 
//     Idade: ${idade[i]}<br>
//     <img src="img/imagensProdutos/${imagem[i]}" alt="${descrition[i]}" style="width: 200px; height: 157px;">
//         </div>`;
// }    