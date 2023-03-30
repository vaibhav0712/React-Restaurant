import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Img, Box, Text, Button } from '@chakra-ui/react';
import Loader from '../layout/Loader';
import { config } from '../config/index';

function RecipeInfo(props) {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [isIingredientActive, setIsIingredientActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchInfo = () => {
      axios
        .post(`${config.SERVER_URL}/recipe`, { id: id })
        .then((res) => {
          const responseData = res.data;
          setRecipeInfo(responseData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchInfo();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Flex>
          <Flex
            flex={'0 0 38%'}
            flexDirection={'column'}
            mt={'2em'}
            textAlign="center"
          >
            <Box
              fontSize={'2xl'}
              style={{ fontFamily: 'Alkatra', fontWeight: 400 }}
            >
              <Text>{recipeInfo.title}</Text>
            </Box>
            <Box mt={'.5rem'}>
              <Img
                borderRadius={'1.2rem'}
                src={recipeInfo.image}
                alt="No Image Found !"
              />
            </Box>
          </Flex>
          <Flex flexDirection={'column'} padding="2em" mt={'.5em'}>
            <Flex gap={'.7rem'}>
              <Button
                bgColor={!isIingredientActive && '#303030'}
                color={!isIingredientActive && 'white'}
                borderRadius={'0'}
                _hover={'none'}
                onClick={() => {
                  setIsIingredientActive(false);
                }}
              >
                Instructions
              </Button>
              <Button
                bgColor={isIingredientActive && '#303030'}
                color={isIingredientActive && 'white'}
                borderRadius={'0'}
                _hover={'none'}
                onClick={() => {
                  setIsIingredientActive(true);
                }}
              >
                Ingredients
              </Button>
            </Flex>
            {isIingredientActive ? (
              <Ingredients ingredients={recipeInfo.extendedIngredients} />
            ) : (
              <Instructions
                summary={recipeInfo.summary}
                instructions={recipeInfo.instructions}
              />
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
}

const Instructions = ({ summary, instructions }) => {
  return (
    <Box mt={'.7rem'}>
      <h3 dangerouslySetInnerHTML={{ __html: summary }}></h3>
      <h3
        style={{ padding: '.5em 0 0 1em' }}
        dangerouslySetInnerHTML={{ __html: instructions }}
      ></h3>
    </Box>
  );
};

const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients && (
        <Box pl="1rem" pt=".7rem">
          {/* <ul> */}
          {ingredients.map((item) => {
            return <p key={item.id}>{item.original}</p>;
          })}
          {/* </ul> */}
        </Box>
      )}
    </>
  );
};

export default RecipeInfo;
