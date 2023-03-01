const express = require('express')
const router = express.Router()
const controller = require('../controllers/users.js')

router.get('/', controller.getAllUsers)
router.get('/search', controller.getUserByName)
router.post('/create', controller.createUser)
router.delete('/delete/:id', controller.deleteOneUser)
router.patch('/update/data', controller.updateOneUserData)


module.exports = router

