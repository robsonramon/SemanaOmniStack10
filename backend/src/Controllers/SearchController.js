const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techArray = techs.split(",").map((tech) => tech.trim());

    const devs = await Dev.find({
      techs: {
        $in: techArray,
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });
    return res.json(devs);
  },
};
