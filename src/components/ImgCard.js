import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ImgCard({ item }) {
  const styles = {
    backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.9)
        ),
        url(${item.image})`,
  };
  return (
    <Link to={`/recipe/${item.id}`} key={item.id}>
      <Box
        width={'230px'}
        height="180px"
        backgroundRepeat={'no-repeat'}
        style={styles}
        bgPos={'center'}
        bgSize={'cover'}
        borderRadius="1.2rem"
        position={'relative'}
      >
        <Text
          position={'absolute'}
          bottom=".6rem"
          left={'.8rem'}
          color="#fff"
          fontFamily={'Alkatra'}
        >
          {item.title}
        </Text>
      </Box>
    </Link>
  );
}
export default ImgCard;
