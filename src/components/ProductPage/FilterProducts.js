import React from "react";
import Styled from "styled-components";
import { ProductConsumer } from "../../context";
export default function FilterProducts() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          min,
          max,
          search,
          company,
          price,
          shipping,
          handleChange,
          storeProducts,
        } = value;

        let comp = storeProducts.map((item) => item.company);

        let companies = new Set();
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }
        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                <div>
                  <label htmlFor="search">Search Products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    onChange={handleChange}
                    value={company}
                    className="filterItem"
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price: <span>${price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    value={shipping && true}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
const FilterWrapper = Styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
grid-column-gap:2rem;
grid-row-gap:1rem;
label{
  font-weight:bold;
  text-transform:capitalize;
}
.filter-item,
.filter-price{
  dispay:block;
  width:100%;
  background:transparent;
  border-radius:0.5rem;
  border:2px solid var(--darkGrey);
}
`;