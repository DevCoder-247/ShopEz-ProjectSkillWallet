// Assigned to: Satyam
const express = require('express');
const router  = express.Router();
const {
  getUserProfile, updateUserProfile, changePassword, getAllUsers, deleteUser,
} = require('../controllers/userController');
const { protect }        = require('../middleware/authMiddleware');
const { restrictTo }     = require('../middleware/roleMiddleware');
const ROLES              = require('../constants/roles');

// Current logged-in user
router.get('/me',          protect, getUserProfile);
router.put('/me',          protect, updateUserProfile);
router.put('/me/password', protect, changePassword);

// Admin only
router.get('/',       protect, restrictTo(ROLES.ADMIN), getAllUsers);
router.delete('/:id', protect, restrictTo(ROLES.ADMIN), deleteUser);

module.exports = router;
