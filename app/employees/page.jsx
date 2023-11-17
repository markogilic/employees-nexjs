import EmployeesList from './EmployeesList';
import { Suspense } from 'react';

const Employees = () => {
  return (
    <div className="w-full grid place-content-center">
      <h1 className=" text-center text-2xl py-3 ">Listo of current employee</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <EmployeesList />
      </Suspense>
    </div>
  );
};

export default Employees;
