const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    species:{
        type:String,
        required:true,
    },
    breed:{
        type:String, 
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    temperment:{
        type:String,
        required:true,
    },
    medical_history:{
        type:String,
        required:true,
    },
    special_requirements:{
        type:String,
        required:true,
    }

});

const applicationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Number:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    petId:{
        type:String,
        required:true,
    },
});

const Pet = mongoose.model('Pet', petSchema);
const Application = mongoose.model('Application', applicationSchema);

module.exports = {
  Pet,
  Application
};

const connectionString = "mongodb+srv://sebastianh034:Nq41NJRmfiKeAjnm@cluster0.whookt4.mongodb.net/pets-server?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connectionString);