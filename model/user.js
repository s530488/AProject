const mongoose=require("mongoose")
var userSchema = mongoose.Schema({ 
        Make: String,    
        Model: String,    
        Year: Number,
        Type: String,
        Features: [String],  
        PurchaseDate:{ type: Date, default: Date.now }  
         }); 
 module.exports = mongoose.model('Consumer', userSchema); 
