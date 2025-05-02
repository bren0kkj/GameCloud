/**
 * Servidor back-end utilizando o módulo Express que manipula os métodos HTTP.
 */

// Importar o módulo Express
// Este módulo é instalado através do comando 'npm install express'
const express = require('express');
const path = require('path');

// configuração de acesso ao servidor
const hostname = '127.0.0.1';
const port = 3000;

// criação do aplicativo servidor
const app = express();

// Configurar a pasta 'public' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/index.html'));
});

// Rota para a página de catálogo
app.get('/catalogo', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/catalogo.html'));
});

// Rota para a página de acessórios
app.get('/acessorios', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/acessorios.html'));
});

// Rota para a página de erro
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'src/pages/erro.html'));
});

// rodar o servidor
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});