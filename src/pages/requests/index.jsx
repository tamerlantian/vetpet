import { Header, Table, Pagination, NoContentMessage } from "../../components";
import { Container, Spinner } from "@chakra-ui/react";
import { useFetchPetsQuery } from "../../store";
import { petsStaffConfig } from "../../data/dumpData";
import { addPage, subPage } from "../../store/slices/petsSlice";
import { useSelector } from "react-redux";

const Affiliations = () => {
  const { currentPage, limit } = useSelector((state) => state.petsSlice);
  const { data, isLoading, isFetching, error } = useFetchPetsQuery(
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
    content = <NoContentMessage />;
  } else {
    content = (
      <>
        <Table data={data.pets} config={petsStaffConfig} />
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
      <Header category="Menu" title="Requests" />
      <div className="bg-white mt-5 p-5 rounded-3xl">
        <div className="mb-10 relative left-5"></div>
        {content}
      </div>
    </Container>
  );
};

export default Affiliations;
