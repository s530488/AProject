var mongoose = require('mongoose'); 
module.exports = mongoose.connect('mongodb+srv://a:a@cluster0-6p5dw.mongodb.net/aproject?retryWrites=true') 
.then(() => { 
console.log("DB connected") 
}, err => { 
console.log("DB error") 
} 
); 
