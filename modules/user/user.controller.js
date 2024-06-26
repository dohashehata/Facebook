
import User from '../../database/models/user.model.js';


// register
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ message: 'User Created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error registering user.' });
  }
};

// login
export const login = async (req, res) => {
  
  res.status(200).json({ message: 'Logged in successfully.', user: req.user });
};

// logout

export const logout = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.update({ loginStutes: false });
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

