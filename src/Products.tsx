import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList, { Product } from "./components/ProductList";
import Pagination from "./components/Pagination";
import ProductModal from "./components/ProductModal";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(
    Number(new URLSearchParams(window.location.search).get("page")) || 1
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/products?page=${pageNumber}&per_page=5`)
      .then((response) => setProducts(response.data.data))
      .catch((error) => {
        setError("An error occured while fetching products.");
        console.log(error);
      });
  }, [pageNumber]);

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
    window.history.pushState(null, "", `/products?page=${newPage}`);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      {error && <div className="error">{error}</div>}
      <ProductList products={products} onProductSelect={handleProductSelect} />
      <Pagination pageNumber={pageNumber} handlePageChange={handlePageChange} />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleClose} />
      )}
    </div>
  );
};

export default Products;
