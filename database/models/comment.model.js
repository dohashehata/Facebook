import sequelize from "../dbConnection.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";
import Post from "./posts.model.js";

const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  
User.hasMany(Comment,{
  onDelete: 'CASCADE',
      onUpdate:'CASCADE'
})
Post.hasMany(Comment,{
  onDelete: 'CASCADE',
      onUpdate:'CASCADE'
})
  Comment.belongsTo(User)
  Comment.belongsTo(Post)
  export default Comment;