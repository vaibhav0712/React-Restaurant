import { GiKnifeFork } from 'react-icons/gi';
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function LogoBar(props) {
  return (
    <Flex alignItems={'center'} gap="4px" ml="1em" mb="2em">
      <GiKnifeFork style={{ fontSize: '1.5em' }} />
      <Link to={'/'} style={{ fontSize: '1.5em', fontFamily: 'Lobster' }}>
        delicios
      </Link>
    </Flex>
  );
}

export default LogoBar;
