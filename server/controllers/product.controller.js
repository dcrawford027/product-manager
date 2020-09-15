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
    },

    updateProduct: (req,res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    deleteProduct: (req,res) => {
        Product.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}