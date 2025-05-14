import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

process.on('uncaughtException', (err) => {
  console.error('Erro não capturado:', err);
});

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

console.log('=== INICIANDO SERVIDOR ===');
console.log('Diretório atual:', __dirname);

// Verificar se o diretório dist existe
const staticPath = join(__dirname, '../dist');
console.log('Verificando diretório de arquivos estáticos:', staticPath);

if (fs.existsSync(staticPath)) {
  console.log('Diretório encontrado!');
  // Listar arquivos no diretório
  const files = fs.readdirSync(staticPath);
  console.log('Arquivos encontrados:', files);
} else {
  console.error('Diretório não encontrado!');
}

// Servir arquivos estáticos
app.use(express.static(staticPath));

// Rota para o index.html
app.get('/', (req, res) => {
  console.log('Recebida requisição para /');
  res.sendFile(join(staticPath, 'index.html'));
});

// Rota para todas as outras páginas
app.get('*', (req, res) => {
  console.log('Recebida requisição para:', req.url);
  res.sendFile(join(staticPath, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('=================================');
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('=================================');
}); 