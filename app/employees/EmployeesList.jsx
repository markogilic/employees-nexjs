import { LuFileEdit } from 'react-icons/lu';
import Link from 'next/link';
import ShowRole from '../components/ShowRole';

async function getEmployees() {
  const res = await fetch('http://localhost:3000/api/employees');
  const data = await res.json();

  return data.data;
}

const EmployeesList = async () => {
  const employees = await getEmployees();

  return (
    <>
      {employees.map((employee) => (
        <div className="card" key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.status}</p>
          <p>
            <ShowRole id={employee.role} />
          </p>
          <Link href={`/employees/${employee.id}`}>
            <LuFileEdit />
          </Link>
        </div>
      ))}

      {employees.lenght === 0 && (
        <p className="text-center">There are no employees </p>
      )}
    </>
  );
};

export default EmployeesList;
