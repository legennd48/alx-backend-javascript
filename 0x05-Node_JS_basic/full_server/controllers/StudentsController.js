import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2];

    try {
      const studentGroups = await readDatabase(database);
      const responseParts = ['This is the list of our students'];

      const fields = Object.keys(studentGroups).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      responseParts.push(`Number of students: ${fields.reduce((sum, field) => sum + studentGroups[field].length, 0)}`);

      for (const field of fields) {
        const studentList = studentGroups[field].map(student => student.firstname).join(', ');
        responseParts.push(`Number of students in ${field}: ${studentGroups[field].length}. List: ${studentList}`);
      }

      res.status(200).send(responseParts.join('\n'));
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentGroups = await readDatabase(database);
      const studentList = studentGroups[major]?.map(student => student.firstname).join(', ');

      res.status(200).send(`List: ${studentList}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
