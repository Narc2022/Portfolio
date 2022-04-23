import { User } from "../model/User.js";
import jwt from 'jsonwebtoken';
import { sendMail } from "../middlewares/sendMail.js";
export const login = async(req,res)=>{
    try{
        const{email,password} = req.body;

        const user =  await User.findOne({email,password});

        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid email or password",
            }).json({
                success:true,
                message:"Logged in Successfully"
            })
        }

        const token = jwt.sign({ _id:user._id },process.env.JWT_SECRET);

        res
        .status(200)
        .cookie("token",token,{
            expires:new Date(Date.now() + 600000),
            httpOnly:true,
        })
        .json({
            success:true,
            message:"Logged in Successfully"
        });
    }catch(error){ 
        return res.status(400).json({
            success:false,
            message:error.message,
        });
    }
};


export const logout = async(req,res)=>{
    try{
        
        res
        .status(200)
        .cookie("token",null,{
            expires:new Date(Date.now()),
            httpOnly:true,
        })
        .json({
            success:true,
            message:"Logged Out Successfully"
        });7
    }catch(error){ 
        return res.status(400).json({
            success:false,
            message:error.message,
        }); 
    }
};

export const getUser = async(req,res)=>{
        try {
            const user = await User.findOne().select("-password -email");

            res.status(200).json({
                success:true,
                user,
            })
        } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message,
        });
    }
};

export const myProfile = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id);

        res.status(200).json({
            success:true,
            user,
        })
    } catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message,
    });
}
};


export const contact = async(req,res)=>{
    try {
        const {name,email,message} = req.body;

        const userMessage = `Hey, I an ${name} . My email is ${email}. My message is ${message}`;

        await sendMail(userMessage);

        return res.status(200).json({
            success:true,
            message:"Message Sent Successfully"
        })

    } catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message,
    });
}
};

export const updateUser = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id);

        res.status(200).json({
            success:true,
            user,
        })
    } catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message,
    });
}
};
// export const myProfile = async(req,res)=>{
//     try {
//         const user = await User.findById(req.user._id);

//         res.status(200).json({
//             success:true,
//             user,
//         })
//     } catch (error) {
//     return res.status(400).json({
//         success:false,
//         message:error.message,
//     });
// }
// };