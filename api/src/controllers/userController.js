const User = require('../models/user');
const passport = require('passport');

exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.createUser = async (req, res) => {
    const { token } = req.body;
  
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
  
      const { name, sub: googleId } = ticket.getPayload();
  
      let user = await User.findOne({ googleId });
  
      if (!user) {
        user = new User({ username: name, googleId });
        await user.save();
      }
  
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        res.status(200).json(user);
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };