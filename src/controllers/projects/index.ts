import { Request, Response } from 'express';
import { Projects } from '../../models/projects';

export const ProjectsGet = async (req: Request, res: Response) => {
  try {
    const Proj = await Projects.find({});
    res.json(Proj);
  } catch (err) {
    res.status(400).send({ message: 'Error on the request' });
  }
};
