import { Table, AddUser, Header, Pagination } from "../../components";
import { useFetchEmployeesQuery } from "../../store";
import { Spinner, Container } from "@chakra-ui/react";
import { employeesConfig } from "../../data/dumpData";
import { useSelector } from "react-redux";
import { addPage, subPage } from "../../store/slices/employeesSlice";

const Employees = () => {
  const { currentPage, limit } = useSelector((state) => state.employeesSlice);
  const { data, isLoading, isFetching, error } = useFetchEmployeesQuery(
    currentPage,
    limit
  );

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
        <Table data={data.employees} config={employeesConfig} />
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
Employees;
