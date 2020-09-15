const { Product } = require('../models/product.model');
const { request } = require('express');

module.exports = {
    createProduct: (req,res) => {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getAllProducts: (req,res) => {
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    getOneProduct: (req,res) => {
        Product.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}