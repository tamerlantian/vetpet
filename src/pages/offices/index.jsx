import {
  Table,
  AddOffice,
  Header,
  NoContentMessage,
  SearchBar,
} from "../../components";
import { useFetchOfficesQuery } from "../../store/apis/officesSlice";
import { Spinner, Container, HStack } from "@chakra-ui/react";
import { officesConfig } from "../../data/dumpData";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { Pagination } from "@mantine/core";

const Offices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading, isError, refetch } = useFetchOfficesQuery({
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
        <SearchBar
          debounced={debounced}
          onRefetch={refetch}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setPage={setPage}
        />
        <Table data={data.offices} config={officesConfig} />
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
      <Header category="Business" title="Offices" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddOffice buttonName="Add office" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Offices;
