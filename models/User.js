// Import db and DataTypes
const { db, DataTypes } = require('../db/connection');
const express = require('express');
const router = express.Router();

// Creating a User model
const User = db.define('users', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
});

// Route to GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users from the database
    res.json(users); // Return users as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});




router.get("/users/:id", async (req,res) => {
  const userID = req.params.id
  const user = await User.findByPk(userID)
  if(user){
    res.json(user)
  }
  else{
    res.status(404).json({ error: "User not found." })
  }
})


router.get("/users/:id/shows", async (req,res) => {
  const userID = req.params.id
  const showsData = require('../db/shows.json')
  const userShows = showsData.filter(show => show.userId === parseInt(userID))
  res.json(userShows)
})

router.put("/users/:userID/shows/:showID", (req,res) =>  {
  const userID = req.params.userID
  const showID = req.params.showID
  const usersData = require('../db/users.json');
  const showsData = require('../db/shows.json');
  //unsure how to do rest
}) 


// Export the User model and router
module.exports = { User, router };

