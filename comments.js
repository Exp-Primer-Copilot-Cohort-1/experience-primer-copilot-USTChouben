// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controller
const commentController = require('../controllers/commentController');

// Import middleware
const auth = require('../middleware/auth');

// Import validation
const { check } = require('express-validator');

// Create comment
// api/comments
router.post(
  '/',
  auth,
  [check('comment', 'Comment is required').not().isEmpty()],
  commentController.createComment
);

// Get all comments
// api/comments
router.get('/', auth, commentController.getComments);

// Update comment
// api/comments/:id
router.put('/:id', auth, commentController.updateComment);

// Delete comment
// api/comments/:id
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;