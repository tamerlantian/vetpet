import React from "react";
import { Header, Table, AddProduct } from "../components";
import { Container, Spinner } from "@chakra-ui/react";
import { useFetchProductsQuery } from "../store";
import { productsConfig } from "../data/dumpData";

const Products = () => {
  const { data, isLoading, error } = useFetchProductsQuery();
  let content;

  if (isLoading) {
    content = (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = <Table data={data} config={productsConfig} />;
  }

  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Business" title="Products" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddProduct />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Products;
