const User = require('../../model/userschama') 

const login = async(req,res) => {

}

const postlogin = async(req,res) =>{
try {
 

const currentLogin =await  User.findOne({email : req.body.email})


if(currentLogin) {
    if(currentLogin.password === req.body.password){
        res.json({data : currentLogin,  message : 'logged in successfully'})
    }else{
        res.status(401).send({message : 'incorrect password'})
    }
}else{
    res.status(401).send({message : 'email not registered'})

 
}
   
} catch (error) {
    console.log(error);
    res.json({message : 'error occured'})
}



}
module.exports = {  login,postlogin} 
// kMoQcYNJAJpXzfss-connection key