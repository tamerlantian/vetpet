import React from "react";
import { Table, Header, Pagination } from "../../components";
import { useFetchProspectsQuery } from "../../store";
import { Spinner, Container } from "@chakra-ui/react";
import { prospectsConfig } from "../../data/dumpData";
import { useSelector } from "react-redux";
import { addPage, subPage } from "../../store/slices/prospectsSlice";

const Prospects = () => {
  const { limit, currentPage } = useSelector((state) => state.prospectsSlice);
  const { data, isLoading, isFetching, error } = useFetchProspectsQuery(
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
        <Table data={data.prospects} config={prospectsConfig} />
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
      <Header category="Users" title="Prospects" />
      <div className="bg-white mt-5 p-5 rounded-3xl">{content}</div>
    </Container>
  );
};

export default Prospects;
