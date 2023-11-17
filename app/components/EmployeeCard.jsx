import Link from 'next/link';

import ProfileImage from './ProfileImage';
import ShowRole from './ShowRole';

const Employee = ({ employee }) => {
  const { name, status, role } = employee;

  const srcImage = 'https://100k-faces.glitch.me/random-image';

  return (
    <div className="employeeCard relative">
      <div className="absolute top-3 right-5">
        {status === 'active' && (
          <span className="text-green-500"> Active ●</span>
        )}
        {status === 'inactive' && (
          <span className="text-red-500"> Inactive ●</span>
        )}
      </div>
      <div className="flex flex-col items-center py-10">
        {/* <img src={srcImage} alt="some image" className="profileImg" /> */}
        <ProfileImage src={srcImage} layouClass="profileImg" />

        <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
        <span className="text-lg text-gray-500">
          <ShowRole id={role} />
        </span>
        <div className="flex mt-4 justify-center  ">
          <Link href="/employees" className="emplyeeBtn">
            Go Back
          </Link>
          <Link href="/employees/edit" className="emplyeeBtn">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Employee;
