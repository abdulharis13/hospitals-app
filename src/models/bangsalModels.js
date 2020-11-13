const mongoose = require('mongoose');

const bangsalModels = new mongoose.Schema({
    kdBangsal: {
        type: Number,
        unique: true,
        required: true
    },

    namaBangsal: {
        type: String,
        maxlength: 50,
        minlength: 10,
        required: true
    },

    dayaTampung: {
        type: String,
        required: true
    },

    lokasiBangsal: {
        type: String,
        required: true
    },

    rekamMedis: {
        type: String,
        required: true,
        unique: true,
    }
})

const BangsalModels = mongoose.model('BangsaModeels', bangsalModels);

module.exports = BangsalModels;