const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Handle different URL paths
  switch (url.pathname) {
    case '/':
      // Send 'Hello Holberton School!' for the root path
      res.end('Hello Holberton School!\n');
      break;
    case '/students':
      // Get the path to the database file
      const databasePath = path.join(__dirname, 'database.csv');

      // Read the database file asynchronously
      countStudents(databasePath)
        .then((results) => {
          // Send the result as plain text
          res.end(`${results.message}\n`);
          for (const [field, details] of Object.entries(results.fields)) {
            res.write(`Number of students in ${field}: ${details.count}. List: ${details.list}\n`);
          }
          res.end();
        })
        .catch((error) => {
          res.statusCode = 500;
          res.end(`${error.message}\n`);
        });
      break;
    default:
      // Handle unknown paths with 404 Not Found
      res.statusCode = 404;
      res.end('404 Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app
module.exports = app;
