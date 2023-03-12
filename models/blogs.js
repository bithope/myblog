const mongoose = require('mongoose');
const mongodb = require('mongodb');
const dburl = 'mongodb+srv://thaibithope:KrdPmi0Rd2iGCGtW@cluster0.yll3rct.mongodb.net/BlogDB';

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});
 
const Blogs = module.exports = mongoose.model('blogs', blogSchema);
module.exports.createBlog = function (newBlogs, callback) {
    newBlogs.save(callback);
}