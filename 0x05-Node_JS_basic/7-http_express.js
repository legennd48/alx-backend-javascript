const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2] || '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
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
    const fileLines = data.trim().split('\n').filter((line) => line.trim() !== '');
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

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.send(responseText);
    })
    .catch((err) => {
      responseParts.push(err.message);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.status(500).send(responseText);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
