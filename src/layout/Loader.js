import { Flex, Img } from '@chakra-ui/react';
import logo from '../logo.svg';

const Loader = () => {
  return (
    <Flex w="100%" h="25em" alignItems={'center'} justifyContent={'center'}>
      <Img width={'150px'} height={'150px'} src={logo} alt="loading..." />
    </Flex>
  );
};

export default Loader;
