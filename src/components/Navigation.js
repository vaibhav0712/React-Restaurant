import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SearFchForm from './SearchForm';
import CuisineBar from './CuisineBar';
import LogoBar from './LogoBar';

function Navigation() {
  return (
    <Box px="10%" py="3%">
      <LogoBar />
      <SearFchForm />
      <CuisineBar />
      <Outlet />
    </Box>
  );
}
export default Navigation;
