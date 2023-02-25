const User = require('../../model/userschama') 


const signUp = async (req, res) => {
    try {
        console.log(req.body)
        const currentSignup = await  User.findOne({email : req.body.email})
        console.log(currentSignup)
        if(!currentSignup){
            const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
            })
            user.save();
            res.status(200).send({message : 'successfully added'})
            // res.json({data : {}})
        }else{
            res.status(401,).send({message : 'Email aldready taken'})
        }
        
    } catch (error) {
        res.status(500,).send({message : 'error occured in the backend'})
        
    }
}

module.exports = {
    signUp
}