const Category = require('./../models/category');

//GET ALL ---> GET
const getAll = async(req,res,next)=>{
    try {
        const rows = await Category.findAll();
        res.status(200).json({ data: rows });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
}
//GET BY ID ---> GET
const getByID = async (req,res,next)=>{
    const { id } = req.params;
    const args = {
        id: Number(id)
    }
    try {
        const rows = await Category.findById(args);
        res.status(200).json({ data: rows });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
}
//CREATE ---> POST
const createCategory = async (req,res,next)=>{
    //console.log(req.body);
    if(!req.body.title || !req.body.body) {
        return res.status(400).json({ message: "missing to enter data"});
    }
    const args = {
        title: req.body.title,
        body: req.body.body
    }
    try {
        await Category.create(args);
        res.status(200).json({ message: 'created' });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
}
//DELETE ---> DELETE
const deleteCategory = async (req,res,next)=>{
    if(!req.body.id) {
        return res.status(400).json({ message: "missing to enter data"});
    }
    const args = {
        id: Number(req.body.id),
    }
    try {
        await Category.deleteById(args);
        res.status(200).json({ message: 'deleted' });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
}
//UPDATE ---> PUT
const updateCategory = async (req,res,next)=>{
    if(!req.body.title || !req.body.body || !req.body.id) {
        return res.status(400).json({ message: "missing to enter data"});
    }
    const args = {
        id: req.body.id,
        title: req.body.title,
        body: req.body.body
    }
    try {
        await Category.updateById(args);
        res.status(200).json({ message: 'update' });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
}

module.exports = {
    getAll,
    getByID,
    createCategory,
    deleteCategory,
    updateCategory
}