import { Button } from "@chakra-ui/react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import {
  addPage,
  subPage,
  selectCurrentPage,
} from "../store/slices/clientsSlice";
import { useDispatch, useSelector } from "react-redux";

const Paginator = ({ isLoading, totalPages }) => {
  const page = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex gap-2 ml-auto w-full">
      <Button
        leftIcon={<HiArrowNarrowLeft />}
        onClick={() => dispatch(subPage(1))}
        isDisabled={page === 1}
        isLoading={isLoading}
      />
      <Button
        leftIcon={<HiArrowNarrowRight />}
        onClick={() => dispatch(addPage(1))}
        isLoading={isLoading}
        isDisabled={page === totalPages}
      />
    </div>
  );
};

export default Paginator;
