const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
}

function register(name, account, password)
{
/*
  const sql0 =`
    select COUNT(account) from users where account = '${account}'
  `;*/
  const sql =`
    INSERT INTO users values('${account}','${password}','${name}')
	`;/*
  countOBJ = db.one(sql0);

  countOBJ.then(count=>{
      console.log(countOBJ);
    if(count.count > 0) {
      return countOBJ;
    }*/
    toprint = db.none(sql); //to see what db any get
    return toprint;
/*
  });
*/


}
module.exports =
{
  register
};
