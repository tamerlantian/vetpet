import { Table, AddUser, Header, Pagination, NoContentMessage } from "../../components";
import { useFetchUsersQuery } from "../../store";
import { Spinner, Container } from "@chakra-ui/react";
import { config } from "../../data/dumpData";
import { useSelector } from "react-redux";
import { addPage, subPage } from "../../store/slices/customersSlice";

const Customers = () => {
  const { currentPage } = useSelector((state) => state.customersSlice);
  const { data, isLoading, isFetching, error } =
    useFetchUsersQuery(currentPage);

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  } else if (error) {
    content = <NoContentMessage />
  } else {
    content = (
      <>
        <Table data={data.users} config={config} />
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
      <Header category="Users" title="Customers" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5">
          <AddUser actionTitle="Add customer" />
        </div>
        {content}
      </div>
    </Container>
  );
};

export default Customers;
