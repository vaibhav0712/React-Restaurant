import { Button } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";

function Pagination({ totalPost, postPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);
  return pages.map((PagneNo) => {
    return (
      <Button
        bg={PagneNo === currentPage ? "tomato" : "grey"}
        onClick={() => {
          setCurrentPage(PagneNo);
        }}
        margin={"0 .7rem"}
      >
        {PagneNo}
      </Button>
    );
  });
}

export default Pagination;
