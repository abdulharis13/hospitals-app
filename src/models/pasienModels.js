const mongoose = require('mongoose');

const pasienModels = new mongoose.Schema({
    namaPasien: {
        type: String,
        maxlength: 30,
        minlength: 7,
        required: true
    },
    
    tanggalLahir: {
        type: String,
        required: true,
    },

    jenisKelamin: {
        type: String,
        required: true,
    },

    alamatPasien: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 10,
        required: true,
    },

    usia: {
        type: Number,
        required: true,
    },

    penyakit: {
        type: String,
        required: true,
    },

    idDokter: {
        type: String,
        required: true,
    },

    tglMasuk: {
        type: String,
        required: true,
    },

    tglKeluar: {
        type: String,
        required: true,
    },

    noKamar: {
        type: Number,
        required: true,
    },
});

const PasienModels = mongoose.model('PasienModels', pasienModels);

module.exports = PasienModels;