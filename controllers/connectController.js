// Import express
const express = require("express");
// Create an instance of a Router
const connectRequest = express.Router({ mergeParams: true });

const db = require('../db/db'); // Import your database connection

// Function to insert a connection request into the database
const createConnectionRequest = async (senderUserProfileId, receiverUserProfileId, status, timestamp) => {
  try {
    const query = `
      INSERT INTO connection_requests (sender_user_profile_id, receiver_user_profile_id, status, timestamp)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`;

    const values = [senderUserProfileId, receiverUserProfileId, status, timestamp];

    const result = await db.query(query, values);
    return result.rows[0]; // Return the inserted row
  } catch (error) {
    throw error;
  }
};

// Route to handle creating a new connection request
connectRequest.post("/", async (req, res) => {
  try {
    // Extract data from request body
    const { sender_user_profile_id, receiver_user_profile_id, status, timestamp } = req.body;
    
    // Call the createConnectionRequest function
    const newConnectionRequest = await createConnectionRequest(sender_user_profile_id, receiver_user_profile_id, status, timestamp);
    
    res.status(201).json(newConnectionRequest);
  } catch (error) {
    console.error('Error creating connection request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = connectRequest;