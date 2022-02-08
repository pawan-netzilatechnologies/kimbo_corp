const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    creator: { type: String, required: true },
    creationDate: {type: String, required: true},
    tags: [
        {name: String}
    ],
});

module.exports = mongoose.model('blogs', blogSchema)