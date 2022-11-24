const express = require('express')
const router = express.Router()
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')

// router.get('/', getGoals)

// router.post('/', setGoal)

// to replace above two lines and chain them in one router

router.route('/').get(protect, getGoals).post(protect, setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)


module.exports = router