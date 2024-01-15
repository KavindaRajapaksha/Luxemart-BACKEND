import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export async function register(req, res) {
    try {
      const { username, password, profile, email } = req.body;
  
      // Check the existing user
      const existUsername = User.findOne({ username });
      const existEmail = User.findOne({ email });
  
      const [existingUsername, existingEmail] = await Promise.all([existUsername, existEmail]);
  
      if (existingUsername) {
        return res.status(400).send({ error: "Username already exists" });
      }
  
      if (existingEmail) {
        return res.status(400).send({ error: "Email already exists" });
      }
  
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const user = new User({
          username,
          password: hashedPassword,
          profile: profile || '',
          email,
        });
  
        await user.save();
  
        return res.status(201).send({ msg: "User Register Successfully" });
      }
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
}
