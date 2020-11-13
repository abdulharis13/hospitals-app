const mongoose = require('mongoose');

const dokterModels = new mongoose.Model({
    namaDokter: {
        type: String,
        maxlength: 30,
        minlength: 10,
        required: true,
    },
    
    spesialisasi: {
        type: String,
        maxlength: 30,
        minlength: 10,
        required: true,
    },

    lokasiPraktek: {
        type: String,
        required: true,
    },

    jamPraktek: {
        type : Number,
        required: true,
    }  
});

const DokterModels = mongoose.model('DokterModels', dokterModels);

module.exports = DokterModels;