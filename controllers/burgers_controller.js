var burgers = require('../models/burger.js');

var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	// res.redirect('/burgers');
	models.burger.findAll({

}).then (function (data){
	res.render('burger/index');
});


router.post('/create', function (req, res) {
	models.burger.create ({
		burger_name: req.body.burger_name,
		)}
	.then (function (){
		res.redirect('/burgers');
	}

});

 router.put('/burger/update/:id', function(req,res) {
	 models.burger.update(
	 var id = req.params.id;
	 where: {id: req.params.id}
	 })
	 .then(function(result) {
	 res.redirect('/burgers');
	 });

// I want destroy/truncate
router.delete('/burgers/delete/', function (req, res) {

    models.burger.truncate({
    	where:{
      id: req.params.id
    	}
	})
      .then(function() {
    		res.redirect('/burgers');
  });

});

module.exports = router;
