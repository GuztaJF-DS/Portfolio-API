import mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema(
  {
    versions: [
      {
        title: {
          type: String,
          required: true
        },
        subTitle: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        imageUrl: {
          type: String,
          required: true
        },
        appUrl: {
          type: String,
          required: true
        },
        gitUrl: {
          type: String,
          required: true
        },
        locale: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    versionKey: false
  }
);

export const Projects = mongoose.model('Projects', projectsSchema);
