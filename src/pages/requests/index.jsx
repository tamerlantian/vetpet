import { Header, Table, NoContentMessage, SearchBar } from "../../components";
import { Container, HStack, Spinner } from "@chakra-ui/react";
import { useFetchPetsQuery } from "../../store/apis/petsSlice";
import { petsStaffConfig } from "../../data/dumpData";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { Pagination } from "@mantine/core";

const Affiliations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading, isFetching, isError, refetch } = useFetchPetsQuery({
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
        <Table data={data.pets} config={petsStaffConfig} />
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
      <Header category="Menu" title="Requests" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5"></div>
        {content}
      </div>
    </Container>
  );
};

export default Affiliations;
