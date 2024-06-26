
import Post from "../../database/models/posts.model.js";
import User from "../../database/models/user.model.js";

// createPost
export const createPost = async (req, res) => {
    const { title, content, UserId } = req.body;
    const user = await User.findOne({ where: { id: UserId, loginStutes: true } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const post = await Post.create({ title, content, UserId });
    res.status(201).json({ message: "Post created successfully", post });
  };


//   updatePost
export const updatePost = async (req,res)=>{
    const { id } = req.params;
    const {title, content,UserId} = req.body
    const post = await Post.update({title,content},{where:{id,UserId}})
    if ( post > 0){
        return res.status(200).json({message:"Post updated successfully"})
    }else{
        return res.status(404).json({message:"Post not found"})
    }


}

// deletePost
export const deletePost = async (req,res)=>{
    const { id } = req.params;
    const {UserId} = req.body
    const post = await Post.destroy({where:{id,UserId}})
    if ( post > 0){
        return res.status(200).json({message:"Post deleted successfully"})
    }else{
        return res.status(404).json({message:"Post not found"})
    }


}
// getPosts
export const getPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.status(200).json({ message: "Get All Posts  successfully", posts });


}

// getSpecificPost
export const getSpecificPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findOne({ where: { id },include : {
        model:User, 
        attributes:{exclude:['password','loginStutes','id']}
    } });
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    
   
    res.status(200).json({ message: "Get Specific Post successfully", post });
}

 