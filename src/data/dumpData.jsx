import {
  EditUser,
  DeleteUser,
  DeleteProduct,
  EditProduct,
  DeleteOffice,
  EditOffice,
  DeleteProspect,
  DeletePlan,
  EditPlan,
} from "../components";
import { Avatar } from "@chakra-ui/react";
import textHider from "../utils/textHider";

export const links = [
  {
    title: "Home",
    name: "home"
  },
  {
    title: "Products",
    name: "products"
  },
  {
    title: "Services",
    name: "services"
  },
  {
    title: "Contact",
    name: "contact"
  },
];

export const config = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "ID Card",
    render: ({ cardId }) => cardId,
  },
  {
    tag: "Name",
    render: ({ name, lastname }) => {
      const _name = `${name} ${lastname}`;
      return (
        <div className="flex items-center gap-4">
          <div>
            <Avatar name={_name} size="md" src="" />
          </div>
          <span>{_name}</span>
        </div>
      );
    },
  },
  {
    tag: "Email",
    render: ({ email }) => email,
  },
  {
    tag: "Phone",
    render: ({ phone }) => phone,
  },
  {
    tag: "Options",
    render: (data) => (
      <div className="flex justify-around">
        <DeleteUser id={data.id} />
        <EditUser data={data} />
      </div>
    ),
  },
];

export const employeesConfig = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "ID Card",
    render: ({ cardId }) => cardId,
  },
  {
    tag: "Name",
    render: ({ name, lastname }) => {
      const _name = `${name} ${lastname}`;
      return (
        <div className="flex items-center gap-4">
          <div>
            <Avatar name={_name} size="md" src="" />
          </div>
          <span>{_name}</span>
        </div>
      );
    },
  },
  {
    tag: "Email",
    render: ({ email }) => email,
  },
  {
    tag: "Phone",
    render: ({ phone }) => phone,
  },
  {
    tag: "Role",
    render: ({ role }) => role,
  },
  {
    tag: "Options",
    render: (data) => (
      <div className="flex justify-around">
        <DeleteUser id={data.id} />
        <EditUser data={data} />
      </div>
    ),
  },
];

export const productsConfig = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "Image",
    render: ({ id }) => (
      <img
        className="rounded-xl h-20 md:ml-3"
        src={`https://picsum.photos/seed/${id}/300/200`}
      />
    ),
  },
  {
    tag: "Type",
    render: ({ type }) => type,
  },
  {
    tag: "Name",
    render: ({ name }) => name,
  },
  {
    tag: "Description",
    render: ({ description }) => textHider(description, 30),
  },
  {
    tag: "Price",
    render: ({ price }) => price,
  },
  {
    tag: "Actions",
    render: (data) => (
      <div className="flex justify-around">
        <DeleteProduct id={data.id} />
        <EditProduct data={data} />
      </div>
    ),
  },
];

export const officesConfig = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "Image",
    render: ({ id }) => (
      <img
        className="rounded-xl h-20 md:ml-3"
        src={`https://picsum.photos/seed/${id}/300/200`}
      />
    ),
  },
  {
    tag: "Department",
    render: ({ department }) => department,
  },
  {
    tag: "City",
    render: ({ city }) => city,
  },
  {
    tag: "Address",
    render: ({ address }) => address,
  },
  {
    tag: "Phone",
    render: ({ phone }) => phone,
  },
  {
    tag: "Actions",
    render: (data) => (
      <div className="flex justify-around">
        <DeleteOffice id={data.id} />
        <EditOffice data={data} />
      </div>
    ),
  },
];

export const prospectsConfig = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "Name",
    render: ({ name, lastname }) => `${name} ${lastname}`,
  },
  {
    tag: "Email",
    render: ({ email }) => email,
  },
  {
    tag: "Phone",
    render: ({ phone }) => phone,
  },
  {
    tag: "Comment",
    render: ({ comment }) => textHider(comment, 30),
  },
  {
    tag: "Options",
    render: (data) => (
      <div className="flex justify-around">
        <DeleteProspect id={data.id} />
      </div>
    ),
  },
];

export const plansConfig = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "Name",
    render: ({ name }) => name,
  },
  {
    tag: "Description",
    render: ({ description }) => textHider(description, 30),
  },
  {
    tag: "Price",
    render: ({ price }) => price,
  },
  {
    tag: "Options",
    render: (data) => (
      <div className="flex justify-around">
        <DeletePlan id={data.id} />
        <EditPlan data={data} />
      </div>
    ),
  },
];
