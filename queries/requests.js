const db = require("../db/dbConfig");

// Function to insert initial data into the connection_requests table
const insertInitialConnectionRequests = async () => {
  try {
    const query = `
      INSERT INTO connection_requests (sender_user_profile_id, receiver_user_profile_id, status, timestamp)
      VALUES
          (1, 2, 'accepted', CURRENT_TIMESTAMP),
          (3, 1, 'pending', CURRENT_TIMESTAMP),
          (2, 1, 'accepted', CURRENT_TIMESTAMP),
          (4, 1, 'pending', CURRENT_TIMESTAMP),
          (4, 2, 'pending', CURRENT_TIMESTAMP),
          (2, 4, 'accepted', CURRENT_TIMESTAMP)
    `;

    await db.query(query); // Execute the query
    console.log('Initial connection requests inserted successfully.');
  } catch (error) {
    console.error('Error inserting initial connection requests:', error);
  }
};

module.exports = {
  insertInitialConnectionRequests
};
