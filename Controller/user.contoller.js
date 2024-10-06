import User from "../modal/user.modal.js";
import  bcrypt from 'bcrypt';
export const signup =async(req,res)=>{
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email});
        if(user)
        {
            return res.status(400).json({message:"user already exits"});
        }
        const hashpassword = await bcrypt.hash(password,10)
        const createUser = new User({
            fullname:fullname,
            email:email,
            password:hashpassword,
         });
        await createUser.save();
         res.status(201).json({message:"created successfully ",user:{
            _id:createUser._id,
            fullname:createUser.fullname,
            email:createUser.email,
            
         },
    })
}catch (error) {
        console.log(error);
        
        res.status(500).json({message:"internal server error "});
        
    }
};

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
    const user = await User.findOne({email});

    const isMatch =await bcrypt.compare(password,user.password)
    if(!user || !isMatch)
    {
        return res.status(400).json({message : "username and password invalid"})
    }
    else
    {
        res.status(200).json({message:"login succesfully",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            password:user.password
        }})
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
        
    }
}