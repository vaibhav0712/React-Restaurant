import { Input, Box, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchValue, setSeachValue] = useState('');

  const searchHandler = (event) => {
    event.preventDefault();
    const finalSearch = searchValue.trim();
    navigate(`/search/${finalSearch}`);
  };

  return (
    <Box>
      <form onSubmit={searchHandler} style={{ width: '50%', margin: 'auto' }}>
        <InputGroup>
          <Input
            placeholder="Search"
            bgGradient="linear(35deg,#494949,#313131)"
            color={'#fff'}
            _placeholder={{ opacity: 0.7, color: '#fff' }}
            _focusVisible={{
              outline: 'none',
              transform: 'Scale(1.03)',
            }}
            borderRadius={'2rem'}
            fontFamily={'Alkatra'}
            onChange={(e) => {
              setSeachValue(e.target.value);
            }}
          />
          <InputRightElement
            children={
              <Search2Icon
                onClick={searchHandler}
                color="#fff"
                cursor={'pointer'}
              />
            }
          />
        </InputGroup>
      </form>
    </Box>
  );
};
export default SearchForm;
