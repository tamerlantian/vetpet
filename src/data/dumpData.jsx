import { ModifyUserButton, DeleteUserButton } from "../components";

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
    tag: "Role",
    render: ({ role }) => role,
  },
  {
    tag: "Options",
    render: (data) => (
      <div className="flex justify-around">
        <DeleteUserButton id={data.id} />
        <ModifyUserButton data={data} />
      </div>
    ),
  },
];
