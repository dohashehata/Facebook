
import { Router } from 'express';
import { createPost, deletePost, getPosts, getSpecificPost, updatePost } from './posts.controller.js';

const postRouter = Router();

postRouter.post('/add', createPost);
postRouter.put('/update/:id', updatePost);
postRouter.delete('/delete/:id', deletePost);
postRouter.get('/getAll', getPosts)
postRouter.get('/getSpecificPost/:id', getSpecificPost)
export default postRouter;
