import { Header, Table, NoContentMessage, SearchBar } from "../../components";
import AddProduct from "./AddProduct";
import { useFetchProductsQuery } from "../../store/apis/productsSlice";
import { Container, HStack, Spinner } from "@chakra-ui/react";
import { productsConfig } from "../../data/dumpData";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading, isError, refetch } = useFetchProductsQuery({
    page,
    limit,
    name: debounced,
  });

  useEffect(() => {
    refetch();
  }, [debounced]);

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  } else if (isError) {
    content = <NoContentMessage />;
  } else {
    content = (
      <>
        <SearchBar
          debounced={debounced}
          onRefetch={refetch}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setPage={setPage}
        />
        <Table data={data?.products} config={productsConfig} />
        <HStack my={6} justifyContent={"flex-end"}>
          <Pagination
            value={page}
            onChange={setPage}
            total={data.paging.totalPages}
            color="gray"
          />
        </HStack>
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
