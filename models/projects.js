const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo_url: {
    type: String
  },
  short_desc: {
    type: String
  },
  long_desc: {
    type: String
  },
  git_url: {
    type: String
  },
  live_url: {
    type: String
  },
  tags: {
    type: Array
  } 
})

const Project = module.exports = mongoose.model('Project', projectSchema);