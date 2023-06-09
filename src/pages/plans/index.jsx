import { Table, Header, Pagination, NoContentMessage } from "../../components";
import { useFetchPlansQuery } from "../../store";
import { Spinner, Container } from "@chakra-ui/react";
import { plansConfig } from "../../data/dumpData";
import { useSelector } from "react-redux";
import { addPage, subPage } from "../../store/slices/plansSlice";
import AddPlan from "./AddPlan";

const Plans = () => {
  const { currentPage, limit } = useSelector((state) => state.plansSlice);
  const { data, isLoading, isFetching, error } = useFetchPlansQuery(
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
    content = <NoContentMessage />
  } else {
    content = (
      <>
        <Table data={data.plans} config={plansConfig} />
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
