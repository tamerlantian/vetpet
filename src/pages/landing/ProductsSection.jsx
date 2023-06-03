import React from "react";
import { SimpleGrid, Box, Stack, Spinner } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "./PrimaryButton";
import { useFetchProductsQuery } from "../../store";

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
    content = data.products.map(({ image, name, description, price }) => {
      return (
        <ProductCard
          imageLink={image}
          productName={name}
          description={description}
          price={price}
        />
      );
    });
  }
  console.log(data);
  return (
    <Box mt={20}>
      <SectionTitle title={"Products"} />
      <SimpleGrid mt={10} columns={[1, 2, 3]} gap={4}>
        {content}
        {/* 
        <ProductCard
          imageLink={"https://m.media-amazon.com/images/I/61IUJIyK2yL.jpg"}
        />
        <ProductCard
          imageLink={
            "https://images-ap-prod.cms.commerce.dynamics.com/cms/api/qwvspcbgds/imageFileData/search?fileName=/Products%2F1001597_000_001.png&m=6&q=80"
          }
        />
        <ProductCard
          imageLink={"https://m.media-amazon.com/images/I/61kFnC+Uo9L.jpg"}
        /> */}
      </SimpleGrid>
      <Stack align={"flex-end"} mt={4}>
        <PrimaryButton name={"view all"} />
      </Stack>
    </Box>
  );
};

export default ProductsSection;
