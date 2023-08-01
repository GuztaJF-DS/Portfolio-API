import mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    SubTitle: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    ImageUrl: {
      type: String,
      required: true
    },
    Link: {
      type: String,
      required: true
    },
    GitLink: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

export const Projects = mongoose.model('Projects', projectsSchema);
