import React, { useEffect, useState } from "react";
// import axios from "axios";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Page,
  Search,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { ordersGrid, ordersData } from "../data/dataSource";


import { Header } from "../components";

const Products = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const res = await axios.get("http://localhost:3000/usuarios");
//     setData(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Business" title="Products" />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        pageSettings={{ pageSize: 7 }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Sort, Page, Edit, Toolbar, Search]} />
      </GridComponent>
    </div>
  );
};

export default Products;
