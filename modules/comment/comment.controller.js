import Comment from "../../database/models/comment.model.js";
import Post from "../../database/models/posts.model.js";

import User from "../../database/models/user.model.js";

// addComment
export const addComment = async (req,res)=>{

    const {content,PostId,UserId} = req.body
    const comment = await User.findOne({where:{id:UserId,loginStutes: true} })

    if (!comment) {
        return res.status(404).json({ message: "User not found" });
    }

    const newComment = await Comment.create({content,PostId,UserId})

    res.status(201).json({ message: "Comment added successfully", comment: newComment });



}

// getComments
export const getComments = async (req, res) => {
    const Comments = await Comment.findAll();
    res.status(200).json({ message: "Get All Comment  successfully", Comments });


}
// updateComments
export const updateComments = async (req,res)=>{
    const { id } = req.params;
    const {content,UserId} = req.body
    const comment = await Comment.update({content},{where:{id,UserId}})
    if ( comment > 0){
        return res.status(200).json({message:"Comment updated successfully"})
    }else{
        return res.status(404).json({message:"Comment not found"})
    }


}

// deleteComment
export const deleteComment = async (req,res)=>{
    const { id } = req.params;
    const {UserId} = req.body
    const comments = await Comment.destroy({where:{ id, userId: UserId }})
    if ( comments > 0){
        return res.status(200).json({message:"comment deleted successfully"})
    }else{
        return res.status(404).json({message:"comment not found"})
    }


}

// userWithCommentAndPosts
export const userWithCommentAndPosts = async (req, res) => {
    try {
      const users = await User.findAll({
        include: {
          model: Post,
          attributes: ['title'],
          include: {
            model: Comment,
            attributes: ['content']
          }
        }
      });
  
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };