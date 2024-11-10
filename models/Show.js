// import our db, Model, DataTypes
const { db, DataTypes } = require('../db/connection')

// Creating a User child class from the Model parent class
const Show = db.define('shows', {
  title: DataTypes.STRING,
  genre: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  available: DataTypes.BOOLEAN
})

router.get("/shows", async(req,res) => {
  const shows = await Show.findAll()
  res.json(shows)
})


router.get("/shows/:id", async(req,res) => {
  const showsID = req.params.id
  const shows = await Show.findByPk(showsID)
  res.json(shows)
})

router.delete("/shows/:id", async (req, res) => {
  const showID = req.params.id;
  await Show.destroy({ where: { id: showID } });
  res.json({ message: `Show with ID ${showID} deleted.` });
});

router.get("/shows/:genre", async (req,res) => {
  const genre = req.params.genre
  const shows = await Show.findAll({
    where: {
      genre: genre
    }
  })
  res.json(shows)
})



// exports
module.exports = Show
