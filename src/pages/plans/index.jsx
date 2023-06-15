import { Table, Header, NoContentMessage, SearchBar } from "../../components";
import { useFetchPlansQuery } from "../../store/apis/plansSlice";
import { Spinner, Container, HStack } from "@chakra-ui/react";
import { plansConfig } from "../../data/dumpData";
import AddPlan from "./AddPlan";
import { Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";

const Plans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading, refetch, isError } = useFetchPlansQuery({
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
        <Table data={data.plans} config={plansConfig} />
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
      <Header category="Business" title="Plans" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddPlan buttonName="Add plan" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Plans;
