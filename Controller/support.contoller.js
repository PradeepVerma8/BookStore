import Support from "../modal/Support.modal.js";

export const support = async(req,res)=>{
    try {
        
        const {name,email,phone,location,query}= req.body;

        const createSupport = new Support ({
            name:name,
            email:email,
            phone:phone,
            location:location,
            query:query
        });

        await createSupport.save();
         res.status(201).json({message:"created successfully "},);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message:"internal server error "});
    }
}