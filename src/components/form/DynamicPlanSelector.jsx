import React, { useState } from "react";
import { Select as _Select, Spinner } from "@chakra-ui/react";
import { useFetchPlansQuery } from "../../store";

const DynamicPlanSelector = ({
  placeholder,
  name,
  register,
  validations = {},
}) => {
  const { data, isLoading } = useFetchPlansQuery();
  
  return (
    <_Select placeholder={placeholder} {...register(name, validations)}>
      {isLoading ? (
        <Spinner />
      ) : (
        data.plans?.map(({ name, _id, price }) => {
          return (
            <option value={_id}>
              {name} - ${price}
            </option>
          );
        })
      )}
    </_Select>
  );
};

export default DynamicPlanSelector;
