
import { Router } from 'express';
import { addComment, deleteComment, getComments, updateComments, userWithCommentAndPosts } from './comment.controller.js';


const commentRouter = Router();

commentRouter.post('/add',addComment );
commentRouter.get('/get',getComments );
commentRouter.put('/update/:id', updateComments);
commentRouter.delete('/delete/:id', deleteComment);
commentRouter.get('/getAll', userWithCommentAndPosts );
export default commentRouter;
