import { Button } from "@chakra-ui/react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";

const Pagination = ({
  isLoading,
  totalPages,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex gap-2 ml-auto w-full">
      <Button
        leftIcon={<HiArrowNarrowLeft />}
        onClick={() => dispatch(prevPage(1))}
        isDisabled={currentPage === 1}
        isLoading={isLoading}
      />
      <Button
        leftIcon={<HiArrowNarrowRight />}
        onClick={() => dispatch(nextPage(1))}
        isLoading={isLoading}
        isDisabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
