import { Heading, Text, Box } from "@chakra-ui/react";

function Card({ number }) {
  return (
    <Box mb={"1rem"} padding={"0 1rem"} boxShadow={""}>
      <Heading textAlign={"center"}>{number}</Heading>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
      </Text>
    </Box>
  );
}
export default Card;
