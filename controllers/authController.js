const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user

exports.registerUser = async (req, res) => {
  try {
  
    const {firstName,lastName,email,phone,country,state,lga,password,confirmPassword } = req.body;

     //{ "username":"Ali", "email":"admin@gmail.com","password":"12345678"};

    // Check if all fields are provided
    if (!firstName || !lastName || !email || !phone || !country || !state || !lga || !password || !confirmPassword) {
       return res.status(400).json({ error: 'All fields are required' });
    }
    else if(password != confirmPassword){
      return res.status(400).json({ error: 'Password Mismatch' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      country,
      state,
      lga,
      password: hashedPassword,
        role: 'user' // Default role
    });

    // Save the user to the database
    await newUser.save();

    // Create a JWT token
    const token = jwt.sign(
        { userId: newUser._id, role: newUser.role },
        'your_jwt_secret',
        { expiresIn: '1h' }
    );

    res.status(201).json({ token });
    
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

exports.registerUser2 = async (req, res) => {
  try {
  
    const { username, email, password } = req.body; //{ "username":"Ali", "email":"admin@gmail.com","password":"12345678"};

    // Check if all fields are provided
    //if (!username || !email || !password) {
       // return //res.status(400).json({ error: 'All fields are required' });
    //}

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role: 'user' // Default role
    });

    // Save the user to the database
    await newUser.save();

    // Create a JWT token
    const token = jwt.sign(
        { userId: newUser._id, role: newUser.role },
        'your_jwt_secret',
        { expiresIn: '1h' }
    );

    res.status(201).json({ token });
    
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id, role: user.role,lname:user.lastName,fname:user.firstName }, 'your_jwt_secret', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
   
    // Store the token in localStorage
    res.status(200).json({'token':token,"role":user.role,user:user._id,'lname':user.lastName,'fname':user.firstName });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout user
exports.logoutUser = (req, res) => {
  const token = req.cookies.token;
  if (token) {
  res.cookie('token', '', { maxAge: 1 });
  res.status(200).json('Logged out successfully' );
  location.href = "/api/auth/login";

}
else{
 
    window.location.href = "/api/auth/login";

}
};
// Get all users (admin only)
exports.getUsers = async (req, res) => {
  try {
      const users = await User.find().select('-password');
      res.status(200).json({ users });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};