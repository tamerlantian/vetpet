import React, { useState } from "react";
import { Select as _Select, Spinner } from "@chakra-ui/react";

const Select = ({
  placeholder,
  useQuery,
  name,
  register,
  validations = {},
}) => {
  const [skip, setSkip] = useState(true);
  const { data, isLoading } = useQuery(undefined, { skip });

  return (
    <_Select
      onClick={() => setSkip(false)}
      placeholder={placeholder}
      {...register(name, validations)}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        data?.plans?.map(({ name, _id, price }) => {
          return <option value={_id}>{name} - ${price}</option>;
        })
      )}
    </_Select>
  );
};

export default Select;
