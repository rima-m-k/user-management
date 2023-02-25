const User = require('../../model/userschama')


const editUser = async(req,res) => {
    try {
        const user = await User.findOne({_id : req.body.id})
        if(user){
            await User.updateOne({ _id : req.body.id}, {$set : {name : req.body.name}})
            const updatedUser = await User.find()
            res.json({data : updatedUser })
        }else{
            res.json({message : 'user not found'})
        }
    } catch (error) {
        console.log(error);
        res.json({message : 'error occured'}) 
    }
}


module.exports = editUser