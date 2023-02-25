const User = require('../../model/userschama')



const home = async(req,res) => {
    const users= await User.find({})
    console.log(users)
    res.json({data:users})
    
  }
    module.exports  = home