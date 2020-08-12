interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const firstSudent: Student = {
  firstName: 'Arturo',
  lastName: 'Adamo',
  age: 18,
  location: 'Split',
}
const secondSudent: Student = {
  firstName: 'Artur',
  lastName: 'Adamian',
  age: 35,
  location: 'San Francisco',
}

const studentsList: Array<Student> = [ firstSudent, secondSudent ];

const generateTable = (studentsList: Array<Student>) => {
  const table = document.createElement('table') as HTMLTableElement;
  const thead = table.createTHead();
  let row = document.createElement('tr');
  let name = document.createElement('th');
  let location = document.createElement('th');
  name.textContent = 'firstName';
  location.textContent = 'location';
  row.appendChild(name);
  row.appendChild(location);
  thead.appendChild(row);
  const tbody = document.createElement('tbody');
  studentsList.forEach((student: Student) => {
    row = document.createElement('tr');
    name = document.createElement('td');
    location = document.createElement('td');
    name.textContent = student.firstName;
    location.textContent = student.location;
    row.appendChild(name);
    row.appendChild(location);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
}
generateTable(studentsList);