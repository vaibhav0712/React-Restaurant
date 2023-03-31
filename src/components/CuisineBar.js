import { FaPizzaSlice, FaHamburger, FaRandom } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const items = [
  { id: '/', origin: 'Random', icon: <FaRandom /> },
  { id: 'italian', origin: 'Italian', icon: <FaPizzaSlice /> },
  { id: 'american', origin: 'American', icon: <FaHamburger /> },
  { id: 'thai', origin: 'Thai', icon: <GiNoodles /> },
  { id: 'japanese', origin: 'Japanese', icon: <GiChopsticks /> },
];

function CuisineBar() {
  return (
    <>
      <Flex justify={'center'} gap="1rem" mt="1.3rem">
        {items.map((item) => {
          return (
            <Flex
              justifyItems={'center'}
              alignItems={'center'}
              flexDirection="column"
            >
              <Link
                to={item.id !== '/' ? `/cuisine/${item.id}` : '/'}
                key={item.id}
              >
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
