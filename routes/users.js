var express = require('express')
var router = express.Router()
var User = require('../models/users')

/* GET users listing. */
router
	.get('/', (req, res, next) => {
		User.find({}, (err, users) => {
			if (!err) {
				res.json(users)
			}else next(err)
		})
	})
	.post('/', (req, res, next) => {
		var user = new User(req.body)
		user.save(err => {
			if (!err) {
				res.json({success: true})
			}else next(err)
		})
	})
	.get('/:id', (req, res, next) => {
		User.findOne({_id: req.params.id}, (err, user) => {
			if (!err && user) {
				res.json(user)
			}else next(err || Error('User not found'))
		})
	})

module.exports = router;
