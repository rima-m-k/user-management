const User = require('../../model/userschama') 

const profile = async (req,res) =>{
    let currentUser=await User.find({})
    console.log(currentUser)
    res.json({user:currentUser})

}

const addImg = async(req,res) =>{
console.log(req.body.email)
console.log(req.file)
await User.updateOne({email:req.body.email},
    {
        $set:{
            image:req.file.filename
        }
    })
let userdata = await User.findOne({email:req.body.email})
res.json(userdata)
}
module.exports = {profile,addImg}