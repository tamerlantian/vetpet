import { EditUser, DeleteProspect, OptionButton } from "../components";
import EditProduct from "../pages/products/EditProduct";
import DeleteProduct from "../pages/products/DeleteProduct";
import DeletePlan from "../pages/plans/DeletePlan";
import DeleteCustomer from "../pages/customers/DeleteCustomer";
import DeleteEmployee from "../pages/employees/DeleteEmployee";
import DeleteOffice from "../pages/offices/DeleteOffice";
import EditOffice from "../pages/offices/EditOffice";
import EditPlan from "../pages/plans/EditPlan";
import DeletePet from "../pages/affiliations/DeletePet";
import { Avatar } from "@chakra-ui/react";
import textHider from "../utils/textHider";
import moment from "moment";
import ViewPet from "../pages/affiliations/ViewPet";
import Evaluate from "../pages/requests/Evaluate";
import { SERVER } from "../config/config";
import AssignDecision from "../pages/requests/AssignDecision";

const pictureLinkBuilder = (photoName) => {
  return photoName ? `${SERVER}${photoName}` : "";
};

export const links = [
  {
    title: "Home",
    name: "landing",
  },
  {
    title: "Products",
    name: "products",
  },
  {
    title: "Services",
    name: "services",
  },
  {
    title: "Contact",
    name: "contact",
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
    render: ({ name, lastname, photo }) => {
      const _name = `${name} ${lastname}`;
      return (
        <div className="flex items-center gap-4">
          <div>
            <Avatar name={_name} size="md" src={pictureLinkBuilder(photo)} />
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
        <DeleteCustomer id={data._id} title="Delete customer" />
        <EditUser data={data} title="Edit customer" />
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
    render: ({ name, lastname, photo }) => {
      const _name = `${name} ${lastname}`;
      return (
        <div className="flex items-center gap-4">
          <div>
            <Avatar name={_name} size="md" src={pictureLinkBuilder(photo)} />
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
        <DeleteEmployee id={data._id} title="Delete employee" />
        <EditUser data={data} title="Edit employee" />
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
    render: ({ kind }) => kind,
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
        <DeleteProduct id={data._id} />
        <EditProduct data={data} />
      </div>
    ),
  },
];

export const petsConfig = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "Name",
    render: ({ name }) => {
      return (
        <div className="flex items-center gap-4">
          <div>
            <Avatar name={name} size="md" src="" />
          </div>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    tag: "specie",
    render: ({ specie }) => specie,
  },
  {
    tag: "created",
    render: ({ createdAt }) =>
      moment(createdAt.toString()).format("YYYY/MM/DD"),
  },
  {
    tag: "state",
    render: ({ state }) => state,
  },
  {
    tag: "Options",
    render: (data) => (
      <>
        <OptionButton>
          <DeletePet id={data._id} title="Delete pet" />
          {/^(accepted|rejected)$/.test(data.state) && <ViewPet data={data} />}
        </OptionButton>
      </>
    ),
  },
];

export const petsStaffConfig = [
  {
    render: ({ id }) => <div className="hidden">{id}</div>,
  },
  {
    tag: "Pet name",
    render: ({ name }) => {
      return (
        <div className="flex items-center gap-4">
          <div>
            <Avatar name={name} size="md" src="" />
          </div>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    tag: "address",
    render: ({ address }) => address,
  },
  {
    tag: "city",
    render: ({ city }) => city?.city,
  },
  {
    tag: "created",
    render: ({ createdAt }) =>
      moment(createdAt.toString()).format("YYYY/MM/DD"),
  },
  {
    tag: "state",
    render: ({ state }) => state,
  },
  {
    tag: "Options",
    render: (data) => (
      <>
        <OptionButton>
          <DeletePet id={data._id} title="Delete pet" />
          <Evaluate id={data._id} petState={data.state} />
          {data.state === "pending" && <AssignDecision id={data._id} />}
        </OptionButton>
      </>
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
        <DeleteOffice id={data._id} />
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
        <DeleteProspect id={data._id} />
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
        <DeletePlan id={data._id} />
        <EditPlan data={data} />
      </div>
    ),
  },
];
