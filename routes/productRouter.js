const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.post('/addperson',productController.addperson)


router.get('/addperson',productController.getAllperson)


router.get('/published',productController.getPublishedProducts)



router.get('/:id',productController.getOneProducts)


router.put('/:id',productController.updateProducts)


router.delete('/:id',productController.deletProducts)

module.exports= router