import React, { useState, useEffect } from "react";
import { useWelcome } from "./welcome.state";
import Product from "../ProductItem";
import { Layout, WelcomeTitle, Label, Input, Header,PaginationDisplay } from "../style/Layout";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

const WelcomePage = () => {
  
  const {products, getProducts, currentPage, setCurrentPage, pageLimit, currentProducts, setCurrentProducts} = useWelcome();

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
    setCurrentProducts(products.slice((page - 1) * pageLimit, pageLimit * page));
  }

  const filterResults = event => {
    getProducts(event.target.value);
  };

  return (
    <Layout>
      <Header>
        <WelcomeTitle>Welcome to my shop! </WelcomeTitle>
        <Label htmlFor="filterInput">Search Products:</Label>
        <Input
          name="filterInput"
          onChange={filterResults}
          placeholder="Type name, ID etc."
        />
      </Header>
      {currentProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      <PaginationDisplay>
      <Pagination
          currentPage={currentPage}
          totalPages={4}
          changeCurrentPage={changeCurrentPage}
          theme="bottom-border"
        />
        </PaginationDisplay>
    </Layout>
  );
};

export default WelcomePage;
