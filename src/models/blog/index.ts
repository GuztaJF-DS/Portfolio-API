import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    post: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    versionKey: false
  }
);

export const Blog = mongoose.model('Blog', blogSchema);
