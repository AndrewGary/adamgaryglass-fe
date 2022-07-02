import React from "react";
import { productCategories } from '../../../siteUtils/productCategories'

const Categories = props => {

    const { setSelectedCategory } = props

    const handleCategorySelection = e => {
        setSelectedCategory(e.target.textContent);
      }

    return (
        <div className="hidden md:flex border border-red-900  justify-center">
          <div className="w-3/4">
            <h1>Collections</h1>
            {/* Collections conatiner */}
            <div className="flex flex-wrap justify-center w-full border border-green-500">
              {productCategories.map((category) => {
                return (
                  <div onClick={handleCategorySelection} className="flex justify-center items-center m-5 w-40 h-40 border border-red-500">
                    {category}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
}

export default Categories;