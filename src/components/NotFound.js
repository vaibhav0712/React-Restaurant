import { Flex, Text } from '@chakra-ui/react';

function NotFound() {
  return (
    <Flex mt={'5em'} justify="center">
      <Text
        ml={'1em'}
        fontSize={'2xl'}
        style={{ fontFamily: 'Alkatra', fontWeight: 400 }}
      >
        Recipe Not Found !
      </Text>
    </Flex>
  );
}
export default NotFound;
