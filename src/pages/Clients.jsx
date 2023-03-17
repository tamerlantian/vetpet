import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  CommandColumn,
  Sort,
  Page,
  Search,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesGrid } from "../data/dataSource";
import { Header, ModalForm } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import {
  getAllClients,
  createUser,
  deleteUser,
  editUser,
} from "../services/ClientService";

const Clients = () => {
  const [data, setData] = useState([]);
  const { setIsModalOpen } = useStateContext();
  const [opt, setOpt] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const clients = await getAllClients();
    setData(clients);
  };

  const userCreate = async (d) => {
    const user = await createUser(d);
    setData([...data, user]);
  };

  const userDelete = async ({ id }) => {
    const isDeleted = await deleteUser(id);
    if (isDeleted) {
      setData(data.filter((user) => user.id != id));
    }
  };

  const userEdit = async (d) => {
    const { cedula, nombre, apellido, telefono, correo, rol } = data;
    const isEdited = await userEdit(d);
    if (isEdited) {
      setData(
        data.map((usr) => {
          if (usr.id === d.id) {
            return { ...usr, cedula, nombre, apellido, telefono, correo, rol };
          }
          return usr;
        })
      );
    }
  };

  const commandClick = async (args) => {
    if (args.commandColumn.type === "Delete") {
      userDelete(args.rowData);
    }

    if (args.commandColumn.type === "Edit") {
      setUser({
        ...user,
        ...args.rowData,
      });
      handleModal("edit");
    }
  };

  const handleModal = (opt) => {
    setIsModalOpen(true);
    setOpt(opt);
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Users" title="Clients" />
      <button
        onClick={() => handleModal("create")}
        className="bg-lime-500 text-white rounded-md py-2 px-5 font-semibold mb-5 hover:bg-lime-600"
      >
        Add user
      </button>
      <ModalForm
        userValues={user}
        onCreateUser={userCreate}
        onEditUser={userEdit}
        opt={opt}
      />
      <GridComponent
        dataSource={data}
        id="Grid"
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        commandClick={commandClick}
        pageSettings={{ pageSize: 7 }}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Sort, Page, Edit, Toolbar, Search, CommandColumn]} />
      </GridComponent>
    </div>
  );
};

export default Clients;
