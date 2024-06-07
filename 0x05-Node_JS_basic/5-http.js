const http = require('http');
const fs = require('fs');

const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const HOST = 'localhost';
const PORT = 1245;

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Abdulrazzaq Liasu
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const field = studentRecord[studentRecord.length - 1];
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentRecord[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce(
      (pre, cur) => pre + cur.length,
      0,
    );
    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      reportParts.push([
        `Number of students in ${field}: ${group.length}.`,
        'List:',
        group.map((student) => student.firstname).join(', '),
      ].join(' '));
    }
    resolve(reportParts.join('\n'));
  });
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(responseText));
      res.statusCode = 200;
      res.end(responseText);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', Buffer.byteLength(responseText));
          res.statusCode = 200;
          res.end(responseText);
        })
        .catch((err) => {
          responseParts.push(err.message);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', Buffer.byteLength(responseText));
          res.statusCode = 500;
          res.end(responseText);
        });
    },
  },
];

app.on('request', (req, res) => {
  const routeHandler = SERVER_ROUTE_HANDLERS.find((handler) => handler.route === req.url);
  if (routeHandler) {
    routeHandler.handler(req, res);
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
