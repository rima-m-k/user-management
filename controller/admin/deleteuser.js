const User = require('../../model/userschama')

const userDetail = async(req,res) => {
    try {
        const user = await User.findOne({_id : req.params.id})
        if(user){
            await User.findByIdAndDelete(req.params.id)
            res.json({success : 'user deleted'})
        }else{
            res.json({message : 'user not found'})
        }
    } catch (error) {
        console.log(error);
        res.json({message : 'error occured'})
    }
}


module.exports = userDetail