const Person = require("../models/person");
const bcrypt = require("bcryptjs");
//regiter
module.exports.registePerson = async (req, res, next) => {
  const args = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  try {
    // { rows, outBinds }
    const { outBinds } = await Person.create(args);
    console.log(outBinds);
    const { person_token } = outBinds;
    res.status(200).cookie('auth_token',person_token[0]).json({
      message: "Person was registed successfuly.",
      email:args.email,
      person_token: person_token[0],
    });
  } catch (error) {
    res.status(400).json({ error: error });
    //next(error);
  }
};

//login
module.exports.loginPerson = async (req, res, next) => {
  //console.log('Cookies: ', req.cookies)
  const args = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    // { rows, outBinds }
    const { rows: responseHashPassword } = await Person.hashPassword(args);
    //console.log(responseHashPassword);
    if (responseHashPassword.length > 0) {
      //console.log(responseHashPassword[0]['PASSWORD'])
      if (
        bcrypt.compareSync(args.password, responseHashPassword[0]["PASSWORD"])
      ) {
        //console.log('correct pass')
        const { outBinds } = await Person.login(args);
        console.log(outBinds);
        const { person_token } = outBinds;
        return res.status(200).cookie('auth_token',person_token[0]).json({
          message: "Login successfuly.",
          email: args.email,
          person_token: person_token[0],
        });
      }
    }
    return res.status(200).json({
      message: "datos no validos.",
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
};
