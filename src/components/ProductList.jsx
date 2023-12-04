import React from "react";

function ProductList({ productsList }) {
  return (
    <div className='flex gap-y-12 flex-col my-12'>
      {productsList.map((product) => (
        <div
          key={product.id}
          className='flex items-start gap-x-10 p-6 shadow-md hover:shadow-lg hover:scale-[1.01]  transition-all rounded-lg cursor-pointer border border-gray-200'
        >
          <div className='h-32 w-32 rounded-xl overflow-hidden flex items-center justify-center hover:scale-[1.02] transition-all'>
            <img
              src={product.attributes.image}
              alt={`${product.attributes.title}-image`}
              className='w-full min-h-full'
            />
          </div>
          <div>
            <h1 className='text-xl capitalize font-semibold text-center'>
              {product.attributes.title}
            </h1>
            <p className='text-gray-500'>{product.attributes.company}</p>
          </div>
          <h3 className='text-lg font-semibold ml-auto'>
            ${product.attributes.price / 100}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
