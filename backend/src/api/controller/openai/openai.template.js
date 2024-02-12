export const template = {
    comando: "Monte o cardápio fitness com as devidas porções em gramas, de modo que o total da refeição seja de aproximadamente 500g e entre 5 e 6 alimentos. O cardápio deve ter sempre uma única opção de proteína, considere os critérios de weight, height, age, goal, goal kgs, health problems, restriction e preference. Caso o atributo 'restriction' não seja uma string vazia, não retorne o valor informada na resposta da requisição, caso o atributo 'preference' possua algum alimento informado, inclua-os obrigatóriamente nesse cardápio, além disso, inclua na resposta os valores nutricionais desse cardápio.",
    resposeFormat: 'retorne a resposta apenas no formato JSON sem nenhum texto iterativo e/ou explicativo. Exemplo de resposta a se seguir: `{ "cardapio": [{ "alimento": "Batata doce", "quantidade": "100g" },  { "alimento": "Peito de frango grelhado", "quantidade": "150g" } ], "valoresNutricionais": [{ "title": "proteinas", "value": "22g" }, { "title": "fibras", "value": "8g" }, { "title": "calorias", "value": "800kcal" }, { "title": "carboidratos", "value": "60g" }]}`',
    food: "",
    weight: 0,
    height: 0,
    age: 0,
    goal: "",
    goalKgs: 0,
    healthProblems: "",
    restriction: "",
    preference: "",
};
