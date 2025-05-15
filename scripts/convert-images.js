import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const convertToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Convertido: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Erro ao converter ${inputPath}:`, error);
  }
};

const processDirectory = async (dir) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      await convertToWebP(filePath, webpPath);
    }
  }
};

// Converter imagens em src/assets
console.log('Iniciando conversão de imagens...');
processDirectory(path.join(__dirname, '../src/assets'))
  .then(() => console.log('Conversão concluída com sucesso!'))
  .catch(error => {
    console.error('Erro durante a conversão:', error);
    process.exit(1);
  }); 