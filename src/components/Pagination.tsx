import React from "react";
import { makeStyles, Button } from "@material-ui/core";

interface Props {
  pageNumber: number;
  handlePageChange: (newPage: number) => void;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "10px",
  },
  page: {
    fontSize: "1.5em",
  },
});

const Pagination: React.FC<Props> = ({ pageNumber, handlePageChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => handlePageChange(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        Previous
      </Button>
      <span className={classes.page}>{pageNumber}</span>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => handlePageChange(pageNumber + 1)}
        disabled={pageNumber === 3}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
