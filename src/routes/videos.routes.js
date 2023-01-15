const { Router } = require('express');
const { getVideos, createVideo, deleteVideo } = require('../controllers/videos.controllers');

const router = Router();

router.get('/videos', getVideos);

router.post('/videos', createVideo)

router.delete('/videos/:id', deleteVideo)

module.exports = router;