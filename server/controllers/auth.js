import bcrypt from "bcrypt";
import User from "../models/User.js";
import {createError} from "../error.js";
import jwt from "jsonwebtoken"
export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({ ...req.body, password: hash })
    await newUser.save()
    res.status(200).send('User has been created!')
  } catch (err) {
    next(err)
  }
}

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name })
    if (!user) return next(createError(404, 'User not found!'))

    const isCorrect = await bcrypt.compare(req.body.password, user.password)

    if (!isCorrect) return next(createError(400, 'Wrong Credentials!'))

    const token = jwt.sign({ id: user._id }, "JWT")
    const { password, ...others } = user._doc

    res.cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(others)
  } catch (err) {
    next(err)
  }
}

export const updatePass = async (req, res) => {

  if (req.params.id === req.user.id) {
    const user = await User.findOne({ _id: req.user._id })

    if (!user) return next(createError(404, 'User not found!'))

    const isCorrect = await bcrypt.compare(req.body.password, user.password)

    if (!isCorrect) return next(createError(400, 'Wrong Credentials!'))

    try{
      await User.updateOne(
        {_id : req.user._id},
        { $set: { password: req.body.newpassword} } 
      )
      res.status(200).json("Password update successfully.")
    } catch (err) { 
      next(err)
    }

  }
}