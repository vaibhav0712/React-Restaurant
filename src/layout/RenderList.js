import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Text, Flex, Img, Box } from '@chakra-ui/react';
import ImgCard from '../components/ImgCard';
import Loader from './Loader';
import NotFound from '../components/NotFound';
import { config } from '../config/index';
import React from 'react';

function RenderList({
  query,
  resultTitle,
  random = false,
  customStyle,
  number = 10,
}) {
  const [recipeData, setRecipeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(recipeData);
  // FETCHING DATA FROM API
  useEffect(() => {
    const storedData = localStorage.getItem(query);
    if (storedData) {
      setRecipeData(JSON.parse(storedData));
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    if (random === true) {
      axios
        .post(`${config.SERVER_URL}/random`, {
          target: 'vegetarian',
          number: number,
        })
        .then((res) => {
          // console.log('Api Random Req send !');
          const responseData = res.data;

          setRecipeData(responseData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.err(err);
        });
    } else {
      axios
        .post(`${config.SERVER_URL}/search`, { target: query })
        .then((res) => {
          // console.log('APi Search Req send !');
          const responseData = res.data.results;
          if (responseData.length !== 0) {
            localStorage.setItem(query, JSON.stringify(responseData));
          }
          setRecipeData(responseData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.err(err);
        });
    }
  }, [query]);

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
              return <ImgCard key={item.id} item={item} />;
            })}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default RenderList;
