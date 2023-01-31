import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { Product } from "./ProductList";

interface Props {
  product: Product;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "2px solid #ddd",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: 250,
    textAlign: "center",
  },
  button: {
    marginTop: "15px",
  },
}));

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.paper} style={{ backgroundColor: product.color }}>
      <h2>{product.name}</h2>
      <p>ID: {product.id}</p>
      <p>Year: {product.year}</p>
      <p>Color: {product.color}</p>
      <p>Pantone Value: {product.pantone_value}</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClose}
        className={classes.button}
      >
        Close
      </Button>
    </div>
  );
};

export default ProductModal;
