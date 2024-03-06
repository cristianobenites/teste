// Importando o framework Express
require('dotenv').config();

const express = require('express');

// Importando o middleware para lidar com CORS
const cors = require('cors');

// Importando as rotas para diferentes recursos da sua aplicação
const routes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const classRoutes = require('./routes/classRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

// Importe as rotas dos workshops
const workshopRoutes = require('./routes/homeRoutes');

// Importando funções específicas dos controladores
const { getAllClasses } = require('./controllers/addClassesControllers');
const { getAllUsers } = require('./controllers/userControllers');

// Criando uma instância do aplicativo Express
const app = express();

// Definindo a porta do servidor
const PORT = process.env.PORT || 3333;

// Adicionando middlewares ao aplicativo
app.use(express.json()); // Middleware para processar JSON no corpo das requisições
app.use(cors()); // Middleware para lidar com CORS (Cross-Origin Resource Sharing)

// Rotas para o frontend
app.use('/api', routes);
app.use('/api/dashboard', dashboardRoutes);

// Rotas para outras funcionalidades
app.use('/api/classes', classRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);

// Rota para obter todas as classes (usando uma função específica do controlador)
app.get('/api/all-classes', getAllClasses);

// Rota para obter todos os usuários (usando uma função específica do controlador)
app.get('/api/all-users', getAllUsers);

// Use as rotas dos workshops
app.use('/api/workshops', workshopRoutes);

// Rota GET para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.json("Server is running");
});

// Rota POST para testar a recepção e resposta de dados
app.post('/testar-post', (req, res) => {
  const { name, date } = req.body;
  res.json({ name, date, message: 'POST received successfully' });
});

// Inicia o servidor e escuta na porta especificada
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
