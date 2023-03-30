import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../Pagination/Card";
import Pagination from "../Pagination/Pagination";

const items = [...Array(100).keys()];
const itemsLength = items.length;
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastIndex = currentPage * postPerPage;
  const startIndex = lastIndex - postPerPage;

  const currentItems = items.slice(startIndex, lastIndex);
  console.warn(URL);
  console.log(items);
  return (
    <Box>
      {currentItems.map((item) => {
        return <Card number={item} />;
      })}
      <Box textAlign={"center"}>
        <Pagination
          totalPost={itemsLength}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
    </Box>
  );
}

export default App;
