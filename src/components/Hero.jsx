import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import HeroScroll from "./HeroScroll";
import { useSelector } from "react-redux";

function Hero() {
  const [productsList, setProductList] = useState([]);

  const productsData = useSelector((state) => state.productsData.data);

  useEffect(() => {
    setProductList(productsData?.data);
  }, [productsData]);

  console.log(productsList);

  return (
    <div className='px-32 py-14'>
      {productsData.data ? (
        <div>
          <div className='flex items-center gap-x-10 justify-between'>
            <div className='basis-1/2'>
              <h1 className='text-6xl font-bold text-blue-900 leading-[4rem]'>
                We are changing the way people shop
              </h1>
              <h3 className='my-5 text-lg'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                doloribus ut eius animi, nulla porro consequuntur magnam, enim
                sapiente ullam fugiat harum quis cupiditate labore natus
                corrupti totam amet odit.
              </h3>
              <Link to='/products'>
                <Button text='our products' />
              </Link>
            </div>
            <div className='basis-1/2'>
              <HeroScroll />
            </div>
          </div>

          <div className='mt-20'>
            <h1 className='text-4xl font-semibold text-blue-900 border-b pb-6'>
              Featured Products
            </h1>

            <div className='grid grid-cols-3 gap-x-6 gap-y-8 my-12'>
              {productsList.map(
                (product) =>
                  product.attributes.featured && (
                    <div
                      key={product.id}
                      className='shadow-md hover:shadow-lg hover:scale-[1.01]  transition-all rounded-lg p-3 cursor-pointer border border-gray-200'
                    >
                      <div className='h-56 rounded-xl overflow-hidden flex items-center justify-center'>
                        <img
                          src={product.attributes.image}
                          alt={`${product.attributes.title}-image`}
                          className='w-full min-h-full'
                        />
                      </div>
                      <h1 className='text-xl capitalize font-semibold mt-8 mb-2 text-center'>
                        {product.attributes.title}
                      </h1>
                      <h3 className='text-lg capitalize mb-4 text-center'>
                        ${product.attributes.price / 100}
                      </h3>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
}

export default Hero;
