const mongodb=require('mongoose');
const jwt=require('jsonwebtoken');

const inputSchema = new mongodb.Schema({
    StoreName:{
        type:String,
        required:true
    },
    SerialNumber:{
        type:Number,
        required:true
    },
    MaterialNumber:{
        type:Number,
        required:true
    },
    MaterialDesc:{
        type:String,
        required:true
    },
    OpeningBalance:{
        type:Number,
        required:true
    },
    RecievedQuantity:{
        type:Number,
        required:true
    },
    IssueQuantity:{
        type:Number,
        required:true
    },
    BalanceQuantity:{
        type:Number,
        required:true
    },
    Day_and_Date:{
        type:Date,
        required:true
    },
    tokens:[{
        token:{type:String,
        required:true
    }
}]
})
inputSchema.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},key);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}





const Input=mongodb.model('INPUT',inputSchema);

module.exports=Input;