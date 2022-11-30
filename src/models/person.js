 const bcrypt = require('bcryptjs');
 const { pool } = require('./../utils/oracle');
 const oracledb = require('oracledb');

 module.exports.create = ({ email, password, first_name, last_name })=>{
    const bindings = {
        email,
        password: bcrypt.hashSync(password,8),
        first_name,
        last_name,
        person_token: { type: oracledb.STRING, dir:oracledb.BIND_OUT }
    };
    const SQL_REGISTER_PERSON = `
    INSERT INTO PERSON (ID,EMAIL,PASSWORD,FIRST_NAME, LAST_NAME,TOKEN_PERSON)
    VALUES(SQ_PERSON.NEXTVAL, :email, :password, :first_name, :last_name, API_TOKEN(TO_CHAR(SYSDATE,'DD-MM-YYYY HH24:MI:SS') || :password) )
    RETURNING TOKEN_PERSON INTO :person_token`;
    return pool(SQL_REGISTER_PERSON, bindings, { autoCommit: true });
 }

 module.exports.login = ()=>{
    
}
