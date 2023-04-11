import React from "react";
import { Table, AddPlan, Header } from "../components";
import { useFetchPlansQuery } from "../store";
import { Spinner, Container } from "@chakra-ui/react";
import { plansConfig } from "../data/dumpData";

const Plans = () => {
  const { data, isLoading, error } = useFetchPlansQuery();

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
    content = <Table data={data} config={plansConfig} />;
  }

  return (
    <Container maxW="90rem" className="mt-4" >
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
