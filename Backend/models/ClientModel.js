const mongoose=require("mongoose");
const ClientsSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        password:{
              type: String,
            required:true
        }

});
const Clients=mongoose.model("Client",ClientsSchema);
module.exports=Clients;