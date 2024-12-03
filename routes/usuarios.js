// routes/usuarios.js
const express = require('express');
const db = require('../config/db');  // Importando a conexão com o banco
const uuid = require('uuid');  // Importando a biblioteca UUID
const router = express.Router();

// Rota GET para listar todos os usuários
router.get('/', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários: ', err);
      return res.status(500).send('Erro ao buscar usuários');
    }
    res.json(results);
  });
});

// Rota POST para adicionar um usuário
router.post('/', (req, res) => {
  const { nome, email } = req.body;
  
  if (!nome || !email) {
    return res.status(400).send('Nome e email são obrigatórios');
  }

  // Gerar um ID único para o usuário
  const id = uuid.v4();  // Usando o UUID para gerar um identificador único
  const query = 'INSERT INTO usuarios (id, nome, email) VALUES (?, ?, ?)';
  db.query(query, [id, nome, email], (err, results) => {
    if (err) {
      console.error('Erro ao inserir usuário: ', err);
      return res.status(500).send('Erro ao inserir usuário');
    }
    res.status(201).json({ id, nome, email });
  });
});

module.exports = router;
