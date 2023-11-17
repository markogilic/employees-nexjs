async function getRoles() {
  const res = await fetch('http://localhost:3000/api/roles');
  const data = await res.json();

  return data.data;
}

const Role = async ({ id }) => {
  const newId = id - 1;
  const roles = await getRoles();
  return <small>{roles.find((role, idx) => idx === newId)}</small>;
};

export default Role;
