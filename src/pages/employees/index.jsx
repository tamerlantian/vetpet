import {
  Table,
  AddUser,
  Header,
  NoContentMessage,
  SearchBar,
} from "../../components";
import { Spinner, Container, HStack } from "@chakra-ui/react";
import { employeesConfig } from "../../data/dumpData";
import { useGetEmployeesQuery } from "../../store/slices/usersSlice";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading, refetch, error } = useGetEmployeesQuery({
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
  } else if (error) {
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
        <Table data={data.employees} config={employeesConfig} />
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
      <Header category="Users" title="Employees" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddUser actionTitle="Add employee" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Employees;
