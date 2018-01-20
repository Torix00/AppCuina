/**
 * CategoriaController
 *
 * @description :: Server-side logic for managing ingredientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
	encontraar : function(req,res){
		var params = req.allParams();
		var recetas = params.recetas.split(",");
		Model.find().populate("recetas").then(function(resultados){
			
			var filtrados = resultados.filter(function(categoria){
				//Aqui es lo bueno
				console.log(categoria.id);
				return true;
			});
			res.json(filtrados);
		});
	},
};
