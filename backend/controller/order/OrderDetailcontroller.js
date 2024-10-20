const OrderModel = require("../../model/OrderModel")
const userModel = require("../../model/userModel")
const AllOrderContoller  = async(req,res)=>{
    const userId = req.userId
    const user = await userModel.findById(userId)

    const Allorder = await OrderModel.find(user).sort({createdAt:-1})

    return res.status(200).json({
        data:Allorder,
        success:true
    })

}
module.exports = AllOrderContoller