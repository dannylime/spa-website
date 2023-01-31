import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  filter: {
    marginBottom: theme.spacing(2),
    display: "flex",
  },
}));

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

interface Props {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, onProductSelect }) => {
  const [filter, setFilter] = React.useState("");
  const classes = useStyles();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value.replace(/[^0-9]/g, "");
    setFilter(newFilter);
  };

  const filteredProducts = filter
    ? products.filter((product) => product.id.toString().includes(filter))
    : products;

  return (
    <div className={classes.root}>
      <TextField
        className={classes.filter}
        type="text"
        placeholder="Filter by ID"
        value={filter}
        onChange={handleFilterChange}
      />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow
              key={product.id}
              onClick={() => onProductSelect(product)}
              style={{ backgroundColor: product.color }}
            >
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
