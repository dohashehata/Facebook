import express from 'express';
import User from './database/models/user.model.js';
import sequelize from './database/dbConnection.js';
import Post from './database/models/posts.model.js';
import Comment from './database/models/comment.model.js';
import userRouter from './modules/user/user.routes.js';
import postRouter from './modules/posts/posts.routes.js';
import commentRouter from './modules/comment/comment.routes.js';
import cors from ' cors'
const app = express();
const port =process.env.PORT ||3000;
app.use(express.json());
app.use(cors())
sequelize.authenticate().then(() => {
  console.log('Database connected.');

}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
sequelize.sync({ alter:true  });


app.use("/users",userRouter)
app.use('/posts',postRouter)
app.use('/comment',commentRouter)
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
