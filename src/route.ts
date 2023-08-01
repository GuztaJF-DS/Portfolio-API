import { Router } from 'express';
import { PostsGet } from './controllers/blog';
import { ProjectsGet } from './controllers/projects';

const route = Router();

route.get('/projects', ProjectsGet);
route.get('/posts', PostsGet);

export default route;
