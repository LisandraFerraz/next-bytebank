/*  Para rodar o banco mockado, siga esses passos:
    1. Crie um arquivo "db.json" na raiz do projeto ou renomeie este arquivo;
    2. Utilize o conteúdo dde dbExemplo para criar o JSON que vai simular registros
      em uma base de dados.
*/

const dbExemplo = {
  usuarios: [
    {
      id: "1",
      nome: "Ana Clara Silva",
      dataNascimento: "1990-05-10",
      cpf: "12345678901",
      dadosBancarios: {
        numeroConta: 123456,
        agencia: "001",
        digito: 9,
        chavePix: "ana.clara@example.com",
      },
      login: {
        email: "anaclara@email.com",
        password: "anaclara123",
      },
    },
    {
      id: "2",
      nome: "Bruno Ferreira",
      dataNascimento: "1985-11-23",
      cpf: "98765432100",
      dadosBancarios: {
        numeroConta: 654321,
        agencia: "002",
        digito: 5,
        chavePix: "bruno.ferreira@pix.com",
      },
      login: {
        email: "brunoferreira@email.com",
        password: "brunoferreira123",
      },
    },
    {
      id: "3",
      nome: "Carla Mendes",
      dataNascimento: "1992-08-17",
      cpf: "32165498722",
      dadosBancarios: {
        numeroConta: 789123,
        agencia: "003",
        digito: 2,
        chavePix: "carla.mendes@pix.com",
      },
      login: {
        email: "carlamendes@email.com",
        password: "carlamendes123",
      },
    },
  ],
  contas: [
    {
      id: "1",
      numeroConta: 123456,
      digito: 5,
      usuarioCpf: "12345678901",
      agencia: "002",
      linhaCredito: 10000,
      saldo: 9500,
      depositos: [],
      transferencias: [
        {
          id: "4ca0d8a6-0eab-4ea4-9209-bd307d812b20",
          chavePix: "bruno.ferreira@pix.com",
          descricao: "Enviando Novo Pix",
          valor: 1000,
          data: "29-05-2025",
          tipo: "PIX",
          destinatario: "Bruno Ferreira Albuquerque",
        },
        {
          id: "4ca0d8a6-0eav-4ea4-9209-bd307d812b20",
          chavePix: "bruno.ferreira@pix.com",
          descricao: "Enviando Novo Pix",
          valor: 1000,
          data: "19-05-2025",
          tipo: "PIX",
          destinatario: "Bruno Ferreira Albuquerque",
        },
        {
          id: "4ca0d8a6-0ebb-4ea4-9209-bd307d812b20",
          chavePix: "bruno.ferreira@pix.com",
          descricao: "Enviando Novo Pix",
          valor: 2000,
          data: "22-05-2025",
          tipo: "PIX",
          destinatario: "Bruno Ferreira Albuquerque",
        },
      ],
      historicoEmprestimos: [
        {
          tipo: "EMPRESTIMO",
          id: "23d7dd7c-c0a5-492c-aef0-404aa7e17337",
          valor: 1000,
          data: "29-05-2025",
          valorPago: 1000,
          valorDevido: 0,
          aberto: false,
        },
      ],
    },
    {
      id: "2",
      numeroConta: 654321,
      digito: 9,
      usuarioCpf: "98765432100",
      agencia: "001",
      linhaCredito: 2500,
      saldo: 3630,
      depositos: [],
      transferencias: [],
      historicoEmprestimos: [],
    },
    {
      id: "3",
      numeroConta: 789123,
      digito: 2,
      usuarioCpf: "32165498722",
      agencia: "003",
      linhaCredito: 3000,
      saldo: 5500,
      depositos: [],
      transferencias: [],
      historicoEmprestimos: [],
    },
  ],
};
