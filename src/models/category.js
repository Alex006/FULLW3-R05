const db = require('./../utils/db');

const create = ({title, body}) => {
    return new Promise((resolve, reject)=>{
        try {
            db.push({
                id: db[db.length - 1].id + 1,
                title: title,
                body: body
            })
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const findAll = () => {
    return new Promise((resolve, reject)=>{
        try {
            resolve(db);
        } catch (error) {
            reject(error);
        }
    })
}

const findById = ({ id })=>{
    return new Promise((resolve, reject)=>{
        try {
            const list = db.filter((item) => item.id === id);
            resolve(list);
        } catch (error) {
            reject(error);
        }
    })
}

const updateById = ({id, title, body })=> {
    return new Promise((resolve, reject)=>{
        try {
            db.map((item)=>{
                if(item.id === id){
                    item.title = title;
                    item.body = body;
                }
                return item;
            })
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const deleteById = ({id})=>{
    return new Promise((resolve, reject)=>{
        try {
            db.map((item,index)=>{
                if(item.id === id){
                    db.splice(index,1);
                }
                return item;
            })
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    create, findAll, findById, updateById, deleteById
}