import React from 'react';

import {
  PaginationItem,
  PaginationContainer,
} from './Pagenation.styles';

// PaginationItem Component
const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationItem state="Default" size="PC">1</PaginationItem>
      <PaginationItem state="Hover" size="PC">1</PaginationItem>
      <PaginationItem state="Selected" size="PC">1</PaginationItem>
      <PaginationItem state="Default" size="Mobile">1</PaginationItem>
      <PaginationItem state="Hover" size="Mobile">1</PaginationItem>
      <PaginationItem state="Selected" size="Mobile">1</PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
