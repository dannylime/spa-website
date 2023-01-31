import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Product } from "./ProductList";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  product: Product;
  onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vw",
    opacity: 0,
  },
  visible: {
    y: "250px",
    opacity: 1,
    transition: { delay: 0.2 },
  },
};
const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 450,
    margin: "0 auto",
    boxShadow: theme.shadows[5],
    padding: "40px 20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  button: {
    marginTop: "15px",
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
}));

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  const classes = useStyles();

  return (
    <AnimatePresence>
      <motion.div
        className={classes.backdrop}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={classes.paper}
          variants={modal}
          style={{ backgroundColor: product.color }}
        >
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
