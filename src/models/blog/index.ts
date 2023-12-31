import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    versions: [
      {
        language: String,
        title: String,
        post: String,
        date: Date,
        locale: String
      }
    ]
  },
  {
    versionKey: false
  }
);

export const Blog = mongoose.model('Blog', blogSchema);
