
import bcrypt from 'bcrypt';
import User from '../database/models/user.model.js';

export const cheackEmailExist = async (req, res, next) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  req.body.password = bcrypt.hashSync(password, 8);
  next();
};

// export const cheackUser = async (req, res, next) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ where: { email } });
  
//     if (!user) {
//       return res.status(409).json({ message: 'User Not Found' });
//     }
  
//     const isPasswordValid = bcrypt.compareSync(password,user.password);

//     if (!isPasswordValid) {
//         return res.json({message:'In valid Password'})
//     }
// const loginStutes= await user.update({loginStutes:true})
// res.json({message:'User logged succssefully',user})
//     next();
//   };
export const cheackUser = async (req, res, next) => {
    const { email, password } = req.body;
    console.log('Email:', email); // Debugging
    console.log('Password:', password); // Debugging
  
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(409).json({ message: 'User Not Found' });
      }
  
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid Password' });
      }
  
      await user.update({ loginStutes: true });
      res.json({ message: 'User logged in successfully', user });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };