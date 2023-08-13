const { Router } = require('express');
const app = Router();
require('dotenv').config();
const Product = require('../models/Product');

exports.getRecent = async (req, res) => {
    const id = req.params.id;

    //Missing fields
    if (!id) {
        res.status(400).send('Id is missing');
        return;
    }

    Product.findOne({ _id: id })
        .then((product) => {
            if (product) {
                res.status(200).json({ product });
            } else {
                res.status(400).send('Product doesnt exist');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

exports.get = async (req, res) => {

    try {
        // Retrieve all products from the database
        const products = await Product.find();

        if (products.length == 0) {
            return res.status(400).send('There isnt any product available!');
        }

        // Return the products as the response
        return res.status(200).json(products);
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        res.status(500).json({ error: 'Failed to retrieve products' });
    }

};
