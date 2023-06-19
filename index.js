const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo(a) ao cadastro de imóveis! \n" +
      "Número de imóveis: " +
      imoveis.length +
      "\n Escolha uma opção: " +
      "\n1. Adicionar imóvel \n2. Listar imóveis \n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Qual o nome do proprietário?");
      imovel.quartos = prompt("Quantos quartos o imóvel possui?");
      imovel.banheiros = prompt("Quantos banheiros o imóvel possui?");
      imovel.garagem = prompt("O imóvel possui garagem?");

      confirm("Deseja salvar este imóvel?");
      if (confirm) {
        imoveis.push(imovel);
      }
      break;

    case "2":
      for (let index = 0; index < imoveis.length; index++) {
        alert(
          "Imóvel " +
            (index + 1) +
            ":" +
            "\n Proprietário: " +
            imovel.proprietario +
            "\n Quartos: " +
            imovel.quartos +
            "\n Banheiros: " +
            imovel.banheiros +
            "\n Possui garagem? " +
            imovel.garagem
        );
      }
      break;
    default:
      break;
  }
} while (opcao !== "3");
