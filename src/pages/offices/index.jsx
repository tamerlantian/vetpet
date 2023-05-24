import React from "react";
import { Table, AddOffice, Header, Pagination } from "../../components";
import { useFetchOfficesQuery } from "../../store";
import { Spinner, Container } from "@chakra-ui/react";
import { officesConfig } from "../../data/dumpData";
import { useSelector } from "react-redux";
import { addPage, subPage } from "../../store/slices/officesSlice";

const Offices = () => {
  const { currentPage } = useSelector((state) => state.officesSlice);
  const { data, isLoading, isFetching, error } =
    useFetchOfficesQuery(currentPage);

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
        <Table data={data.offices} config={officesConfig} />
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
