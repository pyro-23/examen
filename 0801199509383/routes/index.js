var express = require('express');
var router = express.Router();

var almacenSuma=[];
var plantillaSuma={
  valor1:0,
  valor2:0,
  valorTotal:0,
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/0801199509383',function(req,res,next){
  res.render('0801199509383',{title: 'Francisco Jose Murillo Gomez'}, {body: '0801199509383 fran.murillo95@gmail.com'})
});

router.post('/sumar',function(req,res,next){
  res.render('sumar',{
  console.log(req.body);
  var newSuma =Object.assign({},plantillaSuma);
  newLugar.nombre=req.body.txtValor1;
  newLugar.depto=req.body.txtValor2;
  almacenSuma.push(newSuma);
  console.log(almacenSuma);
  var data =Object.assign({},req.body);
  data.Suma = almacenSuma;
  res.render('sumar',data);console.log(req.body);
  var newSuma =Object.assign({},plantillaLugar);
  newSuma.nombre=req.body.txtValor1;
  newSuma.depto=req.body.txtValor2;
  almacenSuma.push(newSuma);
  console.log(almacenSuma);
  var Suma =Object.assign({},req.body);
  data.Suma = almacenSuma;
  res.render('sumar',data);
  })
});

module.exports = router;
