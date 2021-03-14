import fetch from "node-fetch"

const api = 'http://dummy.restapiexample.com/api/v1/employees'
fetch(api)
  .then(response => {
    // console.log(response);
    return response.json()})
  .then(employees => {
    console.log(employees.data);
    employees.data.forEach(employee => console.log(employee.id))
  });