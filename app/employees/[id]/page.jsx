import EmployeeCard from '../../components/EmployeeCard';

async function getEmployee(id) {
  const res = await fetch(`http://localhost:3000/api/employees/${id}`);
  const data = await res.json();
  return data.data;
}

const Employee = async ({ params }) => {
  const paramID = params.id;
  const employee = await getEmployee(paramID);

  return (
    <>
      <EmployeeCard employee={employee} />
    </>
  );
};

export default Employee;
