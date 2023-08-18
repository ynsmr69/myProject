const mongoose = require("mongoose")

const kuranSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true,
    },
    cuz1:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz2:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz3:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz4:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz5:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz6:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz7:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz8:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz9:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz10:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz11:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz12:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz13:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz14:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz15:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz16:{
        type : Boolean,
        required: true,
        default : false
    },

    cuz17:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz18:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz19:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz20:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz21:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz22:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz23:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz24:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz25:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz26:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz27:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz28:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz29:{
        type : Boolean,
        required: true,
        default : false
    },
    cuz30:{
        type : Boolean,
        required: true,
        default : false
    }
    
})

const KuranPages= mongoose.model("KuranPages", kuranSchema)



module.exports = KuranPages;