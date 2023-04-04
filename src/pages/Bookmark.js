import { bookmarkActions } from '../store';
import { useSelector } from 'react-redux';
import NotFound from '../components/NotFound';
import ImgCard from '../components/ImgCard';
import { Grid, Box, Text } from '@chakra-ui/react';

function BookMark(props) {
  const recipeData = useSelector((state) => state.bookmark.savedBookmarks);
  localStorage.setItem('bookmark', JSON.stringify(recipeData));
  // console.log(recipeData);

  return (
    <Box>
      {recipeData.length === 0 ? (
        <NotFound />
      ) : (
        <Text
          pl=".5em"
          my=".5rem   "
          style={{ fontFamily: 'Alkatra', fontWeight: 400 }}
          fontSize={'2xl'}
          textTransform={'capitalize'}
        >
          'Bookmarks'
        </Text>
      )}
      <Grid
        my=".5em"
        gridTemplateColumns={'repeat(5,1fr)'}
        gap={'1rem'}
        overflowX="auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {recipeData.map((item) => {
          return <ImgCard key={item.id} item={item} />;
        })}
      </Grid>
    </Box>
  );
}
export default BookMark;
