import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useStateContext } from "../../contexts/ContextProvider";

const EditForm = ({ userValues, onEditUser }) => {
  const { setIsModalOpen } = useStateContext();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: userValues.id,
      cedula: userValues.cedula,
      nombre: userValues.nombre,
      apellido: userValues.apellido,
      telefono: userValues.telefono,
      correo: userValues.correo,
      rol: userValues.rol,
    },
  });

  const onSubmit = async (data) => {
    reset();
    onEditUser(data);
    setIsModalOpen((prevState) => !prevState);
  };

  const inputStyle = "border rounded-md py-3 px-5";

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <p className="font-semibold text-2xl text-center border-b-1 pb-2">
        Update user
      </p>

      <div className="flex flex-col mt-6">
        <input
          className="hidden"
          type="text"
          {...register("id", { required: true })}
        />
        <label className="mb-1" htmlFor="cedula">
          ID Card
        </label>
        <input
          type="text"
          className={inputStyle}
          {...register("cedula", { required: true })}
        />
        {errors.cedula && (
          <p className="text-red-600">This is a required field</p>
        )}
      </div>

      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="nombre">
          Name
        </label>
        <input
          type="text"
          className={inputStyle}
          {...register("nombre", { required: true })}
        />
        {errors.nombre && (
          <p className="text-red-600">This is a required field</p>
        )}
      </div>

      <div className="flex flex-col mt-3">
        <label className="form-label" htmlFor="apellido">
          Last Name
        </label>
        <input
          type="text"
          className={inputStyle}
          {...register("apellido", { required: true })}
        />
        {errors.apellido && (
          <p className="text-red-600">This is a required field</p>
        )}
      </div>

      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="telefono">
          Telephone
        </label>
        <input
          type="text"
          className={inputStyle}
          {...register("telefono", { required: true })}
        />
        {errors.telefono && (
          <p className="text-red-600">This is a required field</p>
        )}
      </div>

      <div className="flex flex-col mt-3">
        <label className="mb-1" htmlFor="correo">
          Email
        </label>
        <input
          type="email"
          className={inputStyle}
          {...register("correo", { required: true })}
        />
        {errors.correo && (
          <p className="text-red-600">This is a required field</p>
        )}
      </div>

      <div className="flex flex-col mt-3 mb-6">
        <label className="mb-1" htmlFor="rol">
          Role
        </label>
        <Controller
          name="rol"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "admin", label: "Admin" },
                { value: "client", label: "Client" },
                { value: "analyst", label: "adviser" },
              ]}
            />
          )}
        />
        {errors.rol && <p className="text-red-600">This is a required field</p>}
      </div>

      <button type="submit" className="bg-blue-400 rounded py-2 shadow-md">
        <span className="text-white font-bold text-md">Update</span>
      </button>
    </form>
  );
};

export default EditForm;
