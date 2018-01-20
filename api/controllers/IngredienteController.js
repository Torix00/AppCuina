/**
 * IngredienteController
 *
 * @description :: Server-side logic for managing ingredientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	encontrarr : function(req,res){
		var params = req.allParams();
		var recetas = params.recetas.split(",");
		Model.find().populate("recetas").then(function(resultados){
			
			var filtrados = resultados.filter(function(ingrediente){
				//Aqui es lo bueno
				console.log(ingrediente.id);
				return true;
			});
			res.json(filtrados);
		});
	},
};

