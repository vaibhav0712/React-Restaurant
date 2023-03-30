import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Text, Flex, Img, Box } from '@chakra-ui/react';
import ImgCard from '../components/ImgCard';
import Loader from './Loader';
import NotFound from '../components/NotFound';
import { config } from '../config/index';

function RenderList({
  query,
  resultTitle,
  random = false,
  customStyle,
  number = 10,
}) {
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // FETCHING DATA FROM API
  useEffect(() => {
    setIsLoading(true);

    const randomApi = () => {
      console.log('Random Req send !');
      axios
        .post(`${config.SERVER_URL}/random`, {
          target: 'vegetarian',
          number: number,
        })
        .then((res) => {
          const responseData = res.data;
          setRecipeData(responseData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.err(err);
        });
    };

    const searchApi = () => {
      console.log('Search Req send !');
      axios
        .post(`${config.SERVER_URL}/search`, { target: query })
        .then((res) => {
          const responseData = res.data.results;
          setRecipeData(responseData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.err(err);
        });
    };
    if (random === true) {
      randomApi();
    } else {
      searchApi();
    }
  }, [query, random]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box style={customStyle}>
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
              {resultTitle}
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
              return <ImgCard item={item} />;
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default RenderList;
