import { Request, Response } from 'express';
import { Blog } from '../../models/blog';

export const PostsGet = async (req: Request, res: Response) => {
  try {
    const Posts = await Blog.find({});
    res.json(Posts);
  } catch (err) {
    res.status(400).send({ message: 'Error on the request' });
  }
};
