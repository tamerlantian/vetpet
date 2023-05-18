import React from "react";
import { Table, AddUser, Header, Paginator } from "../../components";
import { useFetchUsersQuery } from "../../store";
import { Spinner, Container } from "@chakra-ui/react";
import { config } from "../../data/dumpData";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../../store/slices/clientsSlice";

const Customers = () => {
  const page = useSelector(selectCurrentPage);
  const { data, isLoading, isFetching, error } = useFetchUsersQuery(page);

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
        <Table data={data.users} config={config} />
        <Paginator isLoading={isFetching} totalPages={data.totalPages} />
      </>
    );
  }

  return (
    <Container maxW="90rem" className="mt-4">
      <Header category="Users" title="Clients" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddUser buttonName="Add client" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Customers;
