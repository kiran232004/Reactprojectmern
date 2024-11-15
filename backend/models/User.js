const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  id:{type: 'string', required: true},
  name: { type: String, required: true },
  location: { type: String, required: true},
  rating: { type: String, required: true},
  employee_name: { type: String, required: true}, 
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  scr:{ type: String, required: true},
  likes:{ type: String, required: true,default:0},
  authorImage: { type: String, required: true},
  type: { type: String, required: true},
  views:{ type: String, required: true,default:0},
},{timestamps:true});

module.exports = mongoose.model('User', UserSchema);
