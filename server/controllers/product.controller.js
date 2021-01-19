const Product = require("../models/product.model");

module.exports = {

    create: function( req, res){
        Product.create(req.body)
        .then( (product) => res.json(product))
        .catch( (err) => res.json(err))
    },


    getAll(req, res){
        Product.find()
        .then( (products) => res.json(products))
        .catch( (err) => res.json(err))
    },


    getOne(req,res){

        Product.findById(req.params.id)
        .then( (product) => res.json(product))
        .catch( (err) => res.json(err))
    },

    delete(req,res){

        Product.findByIdAndDelete(req.params.id)
        .then( (product) => res.json(product))
        .catch( (err) => res.json(err))
    },

    update(req,res){

        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
        .then( (product) => res.json(product))
        .catch( (err) => res.json(err))
    },

}