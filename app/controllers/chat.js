module.exports.iniciaChat = (aplication, req, res) => {

  req.assert('apelido', 'Nome ou apelido é obrigatório !!!').notEmpty();
  req.assert('apelido', 'Nome ou apelido dever ter entre 3 e 15 caracteres').len(3, 15);

  let erros = req.validationErrors();

  if (erros) {
    res.render('index', {validacao: erros, campos: req.body.apelido});
    return;
  }

  aplication.get('io').emit(
    'msgParaCliente',
    {apelido:req.body.apelido, mensagem: 'Acabou de entrar no chat !!'}
  );

  res.render('chat');
}

module.exports.inicioDoChat = (aplication, req, res) => {
    res.render('chat');
}
