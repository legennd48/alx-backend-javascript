export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Amos",
    lastName: "Kito",
    age: 45,
    location: "Lagos, Nigeria"
};

const student2: Student = {
    firstName: "Grand",
    lastName: "Master",
    age: 32,
    location: "Hongkong, China"
};

const studentsList: Array<Student> = [
    student1,
    student2,
];

export const renderTable = (studentsList: Array<Student>): void => {
    // create table tag
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.appendChild(headRow); // Using appendChild instead of insertAdjacentElement
  
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
  
    for (const student of studentsList) {
        const studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.appendChild(studentRow); // Using appendChild instead of insertAdjacentElement
    }
  
    document.body.appendChild(table); // Using appendChild instead of insertAdjacentElement
};

renderTable(studentsList);
