
const AdminPannelModel = require('../../model/AdminPannelModel')
const bcrypt = require('bcryptjs')
async function AdminUserSignUp(req , res){
    try {
        const {email , password , name} = req.body
        const user = await AdminPannelModel.findOne({email})
        if(user){
            throw new Error("User Already Registered")

        }
        if(!email){
            throw new Error("Please Provide email")
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        if (!name) {
            throw new Error("Please enter your name");
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        if (!hashPassword) {
            throw new Error("Something Went Wrong");
        }
        const payload = {
            ...req.body,
            role:"GENERAL",
            
            password: hashPassword
        };
        const userData = new AdminPannelModel(payload);
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User Created Successfully"
        });


        
    } catch (err) {
        res.json({
        message: err.message || err,
        error: true,
         success: false
    });

        
    }

}
module.exports = AdminUserSignUp