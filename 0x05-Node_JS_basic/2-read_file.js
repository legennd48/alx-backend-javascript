const fs = require('fs');

/**
 * Counts and logs the number of students in a CSV file.
 * @param {string} filePath - The path to the CSV file.
 * @throws Will throw an error if the database cannot be loaded.
 */

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1).map((line) => {
      const [firstName, , , field] = line.split(',');
      return { firstName, field };
    });

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
