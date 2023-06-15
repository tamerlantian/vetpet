import { Select as _Select, Spinner } from "@chakra-ui/react";
import { useFetchOfficesQuery } from "../../store/apis/officesSlice";

const DynamicCitySelector = ({
  placeholder,
  name,
  register,
  validations = {},
}) => {
  const { data, isLoading } = useFetchOfficesQuery({ limit: 10, page: 1 });

  return (
    <_Select placeholder={placeholder} {...register(name, validations)}>
      {isLoading ? (
        <Spinner />
      ) : (
        data.offices?.map(({ _id, city }) => {
          return (
            <option key={_id} value={_id}>
              {city}
            </option>
          );
        })
      )}
    </_Select>
  );
};

export default DynamicCitySelector;
