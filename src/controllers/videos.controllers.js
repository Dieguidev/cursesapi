const VideosServices = require('../services/videos.services')

const getVideos = async (req, res) => {
  try {
    const result = await VideosServices.getVideos()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createVideo = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await VideosServices.createVideo(newVideo);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideosServices.deleteVideo(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getVideos, createVideo, deleteVideo }