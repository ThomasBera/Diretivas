const express = require('express');
const cors = require('cors');
const Cliente = require('./Cliente'); 

const app = express();
const PORT = 3000;

// Middleware para habilitar JSON no express
app.use(express.json());

// Configuração do CORS
app.use(cors());

// Rotas para os métodos definidos
app.get('/clientes', Cliente.getClientes);             // Retorna todos os clientes
app.get('/clientes/:id', Cliente.getCliente);          // Retorna um cliente pelo ID
app.post('/clientes', Cliente.insertCliente);          // Insere um novo cliente
app.put('/clientes/:id', Cliente.atualizarCliente);    // Atualiza um cliente pelo ID
app.delete('/clientes/:id', Cliente.excluirCliente);   // Exclui um cliente pelo ID

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
