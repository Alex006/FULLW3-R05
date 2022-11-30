const Person =require('../models/person');
//regiter
 module.exports.registePerson = async (req,res,next)=>{

    const args = {
        email: req.body.email,
        password: req.body.password,
        first_name:req.body.first_name,
        last_name: req.body.last_name
    }
    try {
        // { rows, outBinds }
        const { outBinds } = await Person.create(args);
        console.log(outBinds);
        const { person_token } = outBinds;
        res.status(200).json({
            message: 'Person was registed successfuly.',
            person_token: person_token[0]
    });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
 }

 //login
 module.exports.loginPerson = (req,res,next)=>{

 } 