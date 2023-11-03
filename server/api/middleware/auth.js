const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req,res,next)=>{
    try{
        const token = req.header("x-auth-token");
        if(!token)
            return res.status(500).json({msg:"No authentication token,authorization denied."});

            const verified = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(verified)
            if(!verified)
                return res.status(401).json({msg:"token verification failed, authentication denied."});
            req.id = verified.id;
            next();    
    } catch(err){
        res.status(500).json({error:err.message });
    }
};

module.exports = auth;
