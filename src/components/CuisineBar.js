import { FaPizzaSlice, FaHamburger, FaRandom } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const items = [
  { id: '/', icon: <FaRandom /> },
  { id: 'italian', icon: <FaPizzaSlice /> },
  { id: 'american', icon: <FaHamburger /> },
  { id: 'thai', icon: <GiNoodles /> },
  { id: 'japanese', icon: <GiChopsticks /> },
];

function CuisineBar() {
  return (
    <>
      <Flex justify={'center'} gap="1rem" mt="1.3rem">
        {items.map((item) => {
          return (
            <Link
              to={item.id !== '/' ? `/cuisine/${item.id}` : '/'}
              key={item.id}
            >
              <Box
                cursor={'pointer'}
                p={'.7rem'}
                bgGradient="linear(35deg,#393939,#414141)"
                borderRadius={'2rem'}
              >
                <Heading size={'md'} color="#fff" _hover={{ color: 'tomato' }}>
                  {item.icon}
                </Heading>
              </Box>
            </Link>
          );
        })}
      </Flex>
    </>
  );
}
export default CuisineBar;
