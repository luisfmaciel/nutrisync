export const template = {
    comando: "Monte um cardápio fitness",
    food: "Almoço",
    weight: 0,
    height: 0,
    goal: "Manter peso",
    goalKgs: 0,
    activityLevel: "Moderado",
    restriction: "Sem restrição",
    preference: "Sem preferência",
    criterion: "Monte o cardápio com as devidas porções em gramas, de modo que o total da refeição esteja entre 300 e 500 gramas",
    resposeFormat: 'retorne a resposta no apenas formato JSON sem nenhum texto iterativo e/ou explicativo. Exemplo: { "almoco": [ { "alimento": "Salada de folhas verdes", "quantidade": "50g" }, { "alimento": "Arroz integral", "quantidade": "100g" },  { "alimento": "Peito de frango grelhado", "quantidade": "150g" } ]}'
};



// COMMAND_V1: `Monte um cardápio fitness de ${data.food} para uma pessoa, com os seguintes critérios: - Peso: ${data.weight}kg; - Altura: ${data.height} metros; - Objetivo: ${data.goal} ${data.goalKgs}kg; - Nível de atividade física: ${data.activityLevel} - Restrição Alimentar: ${data.restriction}; - Incluir no cardápio: ${data.preference}; Monte o cardápio com as devidas porções em gramas, de modo que o total da refeição esteja entre 300 e 400 gramas. Retorne a resposta no formato JSON sem nenhum texto interativo e/ou explicativo. Exemplo: { 'almoco': [ { 'alimento': 'Salada de folhas verdes', 'quantidade': '50g' }, { 'alimento': 'Arroz integral', 'quantidade': '100g' },  { 'alimento': 'Peito de frango grelhado', 'quantidade': '150g' } ]} `,