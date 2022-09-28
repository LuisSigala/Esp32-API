const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true}
});
const studentsSchema = mongoose.Schema({
    studentsname: {type: String, required: true},
    studetslastname: {type: String, required: true}
});

module.exports = mongoose.model('Post', postSchema);
/* module.exports = mongoose.model('Student', studentsSchema); */