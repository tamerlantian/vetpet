import { useState } from "react";
import { Select as _Select, Spinner } from "@chakra-ui/react";
import { useFetchPlansQuery } from "../../store/apis/plansSlice";

const DynamicPlanSelector = ({
  placeholder,
  name,
  register,
  validations = {},
}) => {
  const { data, isLoading } = useFetchPlansQuery({ limit: 10, page: 1 });

  return (
    <_Select placeholder={placeholder} {...register(name, validations)}>
      {isLoading ? (
        <Spinner />
      ) : (
        data.plans?.map(({ name, _id, price }) => {
          return (
            <option key={_id} value={_id}>
              {name} - ${price}
            </option>
          );
        })
      )}
    </_Select>
  );
};

export default DynamicPlanSelector;
