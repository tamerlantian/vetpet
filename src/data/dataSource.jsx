import Avatar from "@mui/material/Avatar";
import { width } from "@mui/system";

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    {/* <img
      className="rounded-full w-10 h-10"
      src="https://i.pravatar.cc/300"
      alt="employee"
    /> */}
    <Avatar src="/broken-image.jpg" />
    <p>
      {props.nombre} {props.apellido}
    </p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const commands = [
  {
    type: "Edit",
    buttonOption: { iconCss: " e-icons e-edit", cssClass: "e-flat" },
  },
  {
    type: "Delete",
    buttonOption: { iconCss: "e-icons e-delete", cssClass: "e-flat" },
  },
  {
    type: "Save",
    buttonOption: { iconCss: "e-icons e-update", cssClass: "e-flat" },
  },
  {
    type: "Cancel",
    buttonOption: { iconCss: "e-icons e-cancel-icon", cssClass: "e-flat" },
  },
];

export const employeesGrid = [
  {
    field: "cedula",
    headerText: "ID Card",
    width: "125",
    textAlign: "Center",
  },
  {
    headerText: "Employee",
    width: "150",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },
  {
    field: "telefono",
    headerText: "Phone",
    width: "170",
    textAlign: "Center",
  },
  {
    field: "correo",
    headerText: "Email",
    width: "135",
    textAlign: "Center",
  },
  {
    field: "rol",
    headerText: "Rol",
    width: "120",
    textAlign: "Center",
  },
  {
    headerText: "Options",
    width: "120",
    commands: commands
  },
];

// products

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={`https://picsum.photos/seed/${props.OrderID}/300/200`}
      alt="order-item"
    />
  </div>
);

export const ordersGrid = [
  {
    headerText: "Image",
    template: gridOrderImage,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderItems",
    headerText: "Item",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerText: "Customer Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerText: "Total Amount",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "150",
  },
  {
    headerText: "Status",
    template: gridOrderStatus,
    field: "OrderItems",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerText: "Order ID",
    width: "120",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },
];

// data

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
  },
];
