import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

const generateToken = (id) => {
    return jwt.sign(
        {id},
        process.env.JWT_SECRET,
        {expiresIn: "7d"}
    )
}

export const register = async (req, res) => {
    try{
        const {username, name, email, password} = req.body

        if(!username || !name || !email || !password){
            return res.status(400).json({error: "Please fill in all fields"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({
                success: false,
                error: "Username already exists"})
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            name,
            email,
            password: hashedPass
        })

        const token = generateToken(newUser._id)

        res.status(201).json({
            success: true,
            token,
            user: newUser
        })
    } catch(e){
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}

export const login = async(req, res) => {
    try{
        const {username, password} = req.body

        if(!username || !password){
            return res.status(400).json({error: "Please fill in all fields"})
        }

        const user = await User.findOne({username});

        if(!user){
            return res.status(400).json({
                success: false,
                error: "User not exists"
            })
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                success: false,
                error: "Wrong password"
            })
        }
        
        const token = generateToken(user._id)
        console.log(token)
        res.status(200).json({
            success: true,
            token,
            user
        })
    } catch(e){
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}

export const getMe = async(req, res) => {
    try{
        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({
                success: false,
                error: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            user
        })
    } catch(e){
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}