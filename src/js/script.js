/*

    O que precisamos fazer?
        * Quando passar o mouse em cima do personargem na lista temos que adicionar a borda azul de seleção
    na imagem pequena do personagem e mostrar a imagem, O nome e o texto grande do personagem que está selecionado.

    • OBJETIVO 1:
        Quando passar o mouse por cima do personagem na lista, devemos selecioná-lo.
            * PASSO 1: Pegar os personagem no js para poder verificar quando o usuário passar o mouse em
               cima de um deles.
            * PASSO 2: Adicionar a classe selecionado no personagem que o usuário passar  o cursor do mouse.
            * PASSO 3: Verificar se já existe um personagem selecionado, Se Sim, devemos remover a seleção dele.

    • OBJETIVO 2:
        Quando passar o mouse em cima do personagem na lista, tricar a imagem , o nome e a descrição
    do personagem grande.

        * PASSO 1:
            Pegar o elemento do personagem grande para adicionar as informações nele.
        * PASSO 2:
             Alterar a imagem do personagem grande.
        * PASSO 3:Alterar o nome do personagem grande.
        * PASSO 4:
             Alterar a descrição do personagem grande.

*/

if (window.innerWidth < 450) {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// Busca uma lista de alguma coisa querySelectorall
const personagem = document.querySelectorAll(".personagem");

// * PASSO 2: Adicionar a classe selecionado no personagem que o usuário passar  o cursor do mouse .

personagem.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        // * PASSO 3: Verificar se já existe um personagem selecionado, Se Sim, devemos remover a seleção dele.
        // Usando o queryselector para buscar apenas um elemento.
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");

        // • OBJETIVO 2:
        //     Quando passar o mouse em cima do personagem na lista, tricar a imagem , o nome e a descrição
        // do personagem grande.

        //* PASSO 1:
        //         Pegar o elemento do personagem grande para adicionar as informações nele.

        // Pegar um elemento no 
        
        const imagemPersonagemGrande = document.querySelector(".personagem-grande");

        //* PASSO 2:  Alterar a imagem do personagem grande.

        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // * PASSO 3:Alterar o nome do personagem grande.

        const nomepersonagem = document.getElementById("nome-personagem");

        nomepersonagem.innerText = personagem.getAttribute("data-nome")

        // * PASSO 4: Alterar a descrição do personagem grande.

        const descricaoPersonagem = document.getElementById("descricao-personagem");
        descricaoPersonagem.innerText = personagem.getAttribute("data-script")
    })
})