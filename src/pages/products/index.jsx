import React from "react";
import { Header, Table, AddProduct, Pagination } from "../../components";
import { useFetchProductsQuery } from "../../store";
import { Container, Spinner } from "@chakra-ui/react";
import { productsConfig } from "../../data/dumpData";
import { useSelector } from "react-redux";
import { addPage, subPage } from "../../store/slices/productsSlice";

const Products = () => {
  const { currentPage } = useSelector((state) => state.productsSlice);
  const { data, isLoading, isFetching, error } =
    useFetchProductsQuery(currentPage);

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
    content = (
      <>
        <Table data={data?.products} config={productsConfig} />
        <Pagination
          isLoading={isFetching}
          totalPages={data.totalPages}
          currentPage={currentPage}
          nextPage={addPage}
          prevPage={subPage}
        />
      </>
    );
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
