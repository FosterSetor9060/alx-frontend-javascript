// receiving2 arguments_iterator
export default function createEmployeesObject(departmentName, employees) {
  const employee = { [departmentName]: employees };
  return employee;
}
