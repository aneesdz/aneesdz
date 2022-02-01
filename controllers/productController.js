const res = require('express/lib/response')
const { products } = require('../models/person')
const DATABASE = require('../models/product')
//const product = require('../models/product')

//create main model

const persons = DATABASE.products
const Review = DATABASE.reviews

//create product

const addperson = async (req,res) => {

    try {
        let { page, size, sort } = req.query;  
        if (!page) {
         page = 1;
        }
        if (!size) {
      size = 10;
        }
        const limit = parseInt(size);
        const user = await Students.find().sort({ votes: 1, _id: -1 }).limit(limit)
  
        res.send({
            page,
            size,
            Info: user,
        });
    }
    catch (error) {
        res.sendStatus(500);
    }

    let info ={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published : false
    }
     try{
    let  person= await person.create(info)
    res.status(200).send(person)
     }
     catch(err){
           res.send({"Error" : err});
     }
}

// get all products

const getAllperson = async (req,res)=>{
    let products = await products.findAll({})
    res.send(products)
}

//get one product

const getOneProducts = async (req,res)=>{

    let id = req.params.id
    let products = await products.findOne({ id: id})
    res.status(200).send(products)

}

//delete product

const updateProducts = async (req,res)=>{

    let id = req.params.id
    let products = await products.update(req.body,{ id: id})
    res.status(200).send(products)
}

//delete product by id


const deletProducts = async (req,res)=>{

    let id = req.params.id
    await products.destroy({where: {id:id}})
    res.status(200).send('products is deleted')
}

//published product


const getPublishedProducts = async (req,res)=>{

    let id = req.params.id
    await products.destroy({where: {published:true}})
    res.status(200).send('products is deleted')

}



module.exports={
     
    addperson,
    getAllperson,
    getOneProducts,
    updateProducts,
    deletProducts,
    getPublishedProducts
}



