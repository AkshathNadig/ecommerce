const User = require('../models/user')

exports.signup =(req,res) =>{  
    User.findOne({ email: req.body.email }).exec((error,user) =>{
        if(user)
            return res.status(400).json({
                message:'User already register'
        })

        const {
            firstName,
            lastName,
            username,
            email,
            password
        } = req.body
        
        const _user= new User({
                firstName,
                lastName,
                username,
                email,
                password
            })    
            _user.save((error,data)=>{
                if(error){
                    return res.status(400).json({
                        message:'Something went wrong'
                })
                }

                if(data){
                    return res.status(201).json({
                        message:'User Created successfully',
                        //user:data
                    })                  
                }
            })
    })
}