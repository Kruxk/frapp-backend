const bcrypt = require('bcrypt')
const { Router } = require('express')
const { toJWT } = require('../auth/jwt')
const authMiddleware = require('../auth/middleware')
const { SALT_ROUNDS } = require('../config/constants')
const User = require('../models').User


const router = new Router()

router.post('/login', async (req, res, next) => {
	try {
		const { email, password } = req.body

		if (!email || !password) {
			return res
				.status(400)
				.send({ message: 'Please provide both email and password' })
		}

		const user = await User.findOne({
			where: { email }
		})

		if (!user || !bcrypt.compareSync(password, user.password)) {
			return res.status(400).send({
				message: 'User with that email not found or password incorrect',
			})
		}

		delete user.dataValues['password'] // don't send back the password hash
		const token = toJWT({ userId: user.id })
		return res.status(200).send({ token, ...user.dataValues })
	} catch (error) {
		console.log(error)
		return res.status(400).send({ message: 'Something went wrong, sorry' })
	}
})

router.post('/signup', async (req, res) => {
	const { firstName, lastName, email, password } = req.body
	console.log('THIS IS REQ.BODY: ', req.body)
	if (!firstName || !lastName || !email || !password) {
		return res.status(400).send('Please make sure to enter all the details')
	}

	try {
		const newUser = await User.create({
      firstName,
      lastName,
      email,
			password: bcrypt.hashSync(password, SALT_ROUNDS)
		})

		delete newUser.dataValues['password'] // don't send back the password hash

		const token = toJWT({ userId: newUser.id })

		res.status(201).json({ token, ...newUser.dataValues })
	} catch (error) {
		if (error.name === 'SequelizeUniqueConstraintError') {
			return res
				.status(400)
				.send({ message: 'There is an existing account with this email' })
		}

		return res.status(400).send({ message: 'Something went wrong, sorry' })
	}
})

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get('/me', authMiddleware, async (req, res) => {
	// don't send back the password hash
	delete req.user.dataValues['password']
	res.status(200).send({ ...req.user.dataValues })
})

module.exports = router