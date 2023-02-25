const User = require('../../model/userschama')

const userDetail = async(req,res) => {
    try {
        const userDetailss = await User.find()
        res.json({data : userDetailss})
    } catch (error) {
        console.log(error);
        res.json({message : 'error occured'})
    }
}


module.exports = userDetail