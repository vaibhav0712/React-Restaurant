import {
  FaPizzaSlice,
  FaHamburger,
  FaRandom,
  FaBookmark,
} from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const items = [
  { path: '/', origin: 'Random', icon: <FaRandom /> },
  { path: '/cuisine/italian', origin: 'Italian', icon: <FaPizzaSlice /> },
  { path: '/cuisine/american', origin: 'American', icon: <FaHamburger /> },
  { path: '/cuisine/thai', origin: 'Thai', icon: <GiNoodles /> },
  { path: '/cuisine/japanese', origin: 'Japanese', icon: <GiChopsticks /> },
  { path: 'bookmark', origin: 'bookmark', icon: <FaBookmark /> },
];

function CuisineBar() {
  return (
    <>
      <Flex justify={'center'} gap="1rem" mt="1.3rem">
        {items.map((item) => {
          return (
            <Flex
              key={item.path}
              justifyItems={'center'}
              alignItems={'center'}
              flexDirection="column"
            >
              <Link to={item.path} key={item.path}>
                <Box
                  width={'fit-content'}
                  cursor={'pointer'}
                  p={'.7rem'}
                  bgGradient="linear(35deg,#393939,#414141)"
                  borderRadius={'2rem'}
                >
                  <Heading
                    size={'md'}
                    color="#fff"
                    _hover={{ color: 'tomato' }}
                  >
                    {item.icon}
                  </Heading>
                </Box>
              </Link>
              <p style={{ fontFamily: 'Alkatra' }}>{item.origin}</p>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
}
export default CuisineBar;
