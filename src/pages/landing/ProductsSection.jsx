import { SimpleGrid, Box, Stack, Spinner } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "./PrimaryButton";
import { useFetchProductsQuery } from "../../store/apis/productsSlice";

const ProductsSection = () => {
  const { data, isLoading, error } = useFetchProductsQuery({
    page: 1,
    limit: 3,
  });

  let content;
  if (isLoading) {
    content = <div>LOADING</div>;
  } else if (error) {
    content = (
      <div>
        <Spinner />
      </div>
    );
  } else {
    content = data.products.map(({ image, name, description, price, kind }) => {
      return (
        <ProductCard
          key={name}
          kind={kind}
          imageLink={image}
          productName={name}
          description={description}
          price={price}
        />
      );
    });
  }
  return (
    <Box mt={20}>
      <SectionTitle title={"Products"} />
      <SimpleGrid mt={10} columns={[1, 2, 3]} gap={4}>
        {content}
      </SimpleGrid>
      <Stack align={"flex-end"} mt={4}>
        <PrimaryButton isDisabled name={"view all"} />
      </Stack>
    </Box>
  );
};

export default ProductsSection;
