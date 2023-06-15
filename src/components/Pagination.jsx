import { Button } from "@chakra-ui/react";
import { usePagination } from "@mantine/hooks";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";

const Pagination = ({ isLoading, totalPages, setPage }) => {
  const dispatch = useDispatch();
  const pagination = usePagination({ total: totalPages, initialPage: 1 });

  console.log(pagination.range);
  console.log(pagination.active)

  return (
    <div className="p-4 flex gap-2 ml-auto w-full">
      <Button
        leftIcon={<HiArrowNarrowLeft />}
        onClick={() => pagination.next()}
        isDisabled={pagination.active === 1}
        isLoading={isLoading}
      />
      <Button
        leftIcon={<HiArrowNarrowRight />}
        onClick={() => pagination.previous()}
        isLoading={isLoading}
        isDisabled={pagination.active === totalPages}
      />
    </div>
  );
};

export default Pagination;
