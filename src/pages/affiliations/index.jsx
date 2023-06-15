import { Header, Table, NoContentMessage, SearchBar } from "../../components";
import { Container, HStack, Spinner, Text } from "@chakra-ui/react";
import { useFetchMyPetsQuery } from "../../store/apis/petsSlice";
import { petsConfig } from "../../data/dumpData";
import AddPet from "./addPet";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { Pagination } from "@mantine/core";

const Affiliations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading, isError, refetch } = useFetchMyPetsQuery({
    page,
    limit,
    name: debounced,
  });

  console.log(data);

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
        <Table data={data.pets} config={petsConfig} />
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
      <Header category="Menu" title="Affiliation" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddPet buttonName="Add pet" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Affiliations;
