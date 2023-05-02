const employee = {
  name: "Johnny",
  streetAddress: "122 Mockingbird Lane",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmployee = { ...obj };
  newEmployee[key] = value;
  return newEmployee;
}
updateEmployeeWithKeyAndValue(employee, "name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "street", "122 Broadway");

function deleteFromEmployeeByKey(obj, key) {
  const newEmployee = { ...obj };
  delete newEmployee.name;
  return newEmployee;
}

deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}
