export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Manutenção preventiva: o que fazer a cada 10.000 km",
    excerpt:
      "Um guia prático do que verificar periodicamente no veículo — e por que isso economiza dinheiro no longo prazo.",
    date: "2026-08-10",
    content: [
      "Manutenção preventiva é a diferença entre trocar uma peça de forma planejada ou ter que fazer um reparo emergencial, quase sempre mais caro. A cada 10.000 km rodados, alguns pontos merecem atenção antes que virem problema.",
      "Óleo e filtros: o óleo perde propriedades lubrificantes com o tempo e o uso. Trocar no intervalo certo evita desgaste prematuro do motor. O filtro de óleo e o filtro de ar também entram nessa revisão.",
      "Freios: vale conferir a espessura das pastilhas e o estado dos discos, mesmo sem sinal aparente de desgaste. Pegar o problema cedo evita que o disco também precise ser trocado junto.",
      "Suspensão: ruídos ao passar por buracos ou lombadas, ou desgaste irregular dos pneus, são sinais de que amortecedores ou buchas merecem uma inspeção.",
      "Se a revisão está atrasada, o carro costuma avisar: consumo de combustível mais alto, ruídos novos, ou perda de desempenho. Não espere esses sinais aparecerem — agende a revisão dentro do intervalo recomendado.",
    ],
  },
  {
    id: "2",
    title: "Como aumentar a vida útil dos freios do seu carro",
    excerpt:
      "Dicas práticas pra prolongar a vida útil do sistema de freios, e os sinais de que a pastilha está no fim.",
    date: "2026-08-17",
    content: [
      "O sistema de freios é um dos itens de segurança mais importantes do carro, e também um dos que mais gera dúvida sobre quando trocar. Alguns hábitos simples ajudam a prolongar a vida útil das peças.",
      "Evite frear bruscamente com frequência: isso acelera o desgaste das pastilhas e discos. Sempre que possível, antecipe a freada e reduza a velocidade de forma gradual.",
      "Fique atento aos sinais: ruído de metal com metal, vibração no pedal, ou o pedal ficando mais 'fundo' que o normal são indícios de que a pastilha está no fim e precisa de atenção.",
      "Não espere o disco desgastar junto: quando a pastilha é trocada tarde demais, o disco também sofre e pode precisar ser substituído — um custo bem maior do que a troca preventiva da pastilha sozinha.",
      "Uma revisão periódica do sistema de freios, mesmo sem sintomas aparentes, é o jeito mais seguro e econômico de manter tudo funcionando como deveria.",
    ],
  },
];