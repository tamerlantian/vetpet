import axios from "axios";

const baseURL = "http://localhost:3000";

export async function getAllClients() {
  try {
    const response = await axios.get(`${baseURL}/usuarios`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function createUser(data) {
  const { cedula, nombre, apellido, telefono, correo, rol } = data;
  const response = await axios.post(`${baseURL}/usuarios`, {
    cedula,
    nombre,
    apellido,
    telefono,
    correo,
    rol: rol.value,
  });

  return response.data;
}

export async function deleteUser(id) {
  try {
    await axios.delete(`${baseURL}/usuarios/${id}`);
    return true;
  } catch (e) {
    return false;
  }
}

export async function editUser(data) {
  try {
    const { cedula, nombre, apellido, telefono, correo, rol } = data;
    await axios.patch(`http://localhost:3000/usuarios/${id}`, {
      cedula,
      nombre,
      apellido,
      telefono,
      correo,
      rol,
    });
    return true;
  } catch (e) {
    return false;
  }
}
