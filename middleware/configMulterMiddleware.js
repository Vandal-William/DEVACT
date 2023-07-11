const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

// Fonction pour générer une chaîne aléatoire de longueur spécifiée
function generateRandomString(length) {
  return crypto.randomBytes(length).toString('hex');
}

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = `./public/userImg`;
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = generateRandomString(16);
    const extname = path.extname(file.originalname);
    const filename = path.basename(file.originalname, extname);

    cb(null, filename + '-' + uniqueSuffix + extname);
  }
});

const upload = multer({ storage });

module.exports = upload;
