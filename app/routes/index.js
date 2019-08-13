module.exports = (aplication) => {
  aplication.get('/', (req, res) => {
    aplication.app.controllers.index.paginaInicial(aplication, req, res);
  });
}
