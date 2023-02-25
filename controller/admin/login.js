const Admin = require('../../model/adminschema') 

const login = async(req,res) => {
console.log(req.body) 
let adminDetails= await Admin.findOne({})
if(req.body.email===adminDetails.email && req.body.password===adminDetails.password) {
    res.json({  message : 'logged in successfully'})

}else{
    res.status(401).send({message : 'incorrect login details'})

}
  }
    module.exports  = login 