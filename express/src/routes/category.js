const express = require('express');
const { getAll, getByID, createCategory, deleteCategory, updateCategory} = require('./../controllers/category');
const router = express.Router();

//GET ALL ---> GET
router.get('/category',getAll);
//GET BY ID ---> GET
router.get('/category/:id',getByID);
//CREATE ---> POST
router.post('/category',createCategory);
//DELETE ---> DELETE
router.delete('/category',deleteCategory);
//UPDATE ---> PUT
router.put('/category',updateCategory);


module.exports = router;