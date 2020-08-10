import React from "react";
import ProductCard from "react-ui-cards";

// photos	array	array of urls to photos of the product
// price	string	the price that will be displayed in the upper lefthand corner
// productName	string	name of the product
// description	string	a short description of the product
// rating	integer	rating of the product (0-5). Not implemented yet.
// url	string	url the button will link to
// buttonText	string/null	optional button text
class List extends React.Component {
  render() {
      return (
          <div>
              <ProductCard
                  
                  price="$10"
                  productName="My product"
                  description="This is the description"
                  rating="1"
                  buttonText="click me"
              />
          </div>
      )
  }
}

export default List;
