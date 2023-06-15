import { Table, Header, NoContentMessage, SearchBar } from "../../components";
import { useFetchProspectsQuery } from "../../store/apis/prospectsSlice";
import { Spinner, Container, HStack } from "@chakra-ui/react";
import { prospectsConfig } from "../../data/dumpData";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";

const Prospects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, refetch, isLoading, isError } = useFetchProspectsQuery({
    limit,
    page,
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
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Table data={data.prospects} config={prospectsConfig} />
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
      <Header category="Users" title="Prospects" />
      <div className="bg-white mt-5 p-5 rounded-3xl">{content}</div>
    </Container>
  );
};

export default Prospects;
