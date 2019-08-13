const express          = require('express');
const consign          = require('consign');
const bodyParser       = require('body-parser');
const expressValidator = require('express-validator')

const app = express();

/* Configurações de middleware */

/*seta as variaveis no express para views*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*configura middleware de arquivos staticos*/
app.use(express.static('./app/public'));

/*configura o body parser, usando o metodo urlenconded*/
app.use(bodyParser.urlencoded({extended:true}));

/* configura a validação de campos */
app.use(expressValidator());

/* autoload das rostas, models e controllers para o objeto app */
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;
