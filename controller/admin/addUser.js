const User = require('../../model/userschama')

const addUser = async(req,res) => {
    try {
        console.log(req.body);
        const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        newUser.save()
        res.json({message : 'success'}) 
    } catch (error) {
        console.log(error);
        res.json({message : 'error occured'})
    }
}


module.exports = addUser