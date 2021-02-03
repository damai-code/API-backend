const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    name: { type:String, required: true },
    username: { type:String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true, data: Buffer},
    role: {type: Number, default: 0},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const model = mongoose.model('User', userSchema);

export default model;