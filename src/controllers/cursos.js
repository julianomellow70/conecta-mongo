import Curso from "../model/Curso.js";

const listarTodos = async function (req, res) {
  try {
    const result = await Curso.find();
    res.status(200)
    res.send(result)
  } catch (err) {
    res.status(500);
    res.send({
      error: err
    })
  }
}

const inserir = (req, res) => {
  //try {
  const curso = new Curso({
    titulo: req.body.titulo,
    cargaHoraria: req.body.cargaHoraria,
    instrutor: req.body.instrutor,
    tags: req.body.tags
  })

  curso.save().then(result => {
    res.status(201)
    res.send(result)
  }).catch(err => {
    console.log(err);
    res.status(400);
    res.send({
      "err": err
    })
  })

  /*} catch (err) {
    res.status(500);
    res.send({
      error: err
    })*/
}

const cursoController = {
  inserir, listarTodos
}

export default cursoController;