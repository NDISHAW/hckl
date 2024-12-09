import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../../context/StateProvider';

export default function ProductDetails({ data }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Select Size");

  const item = data?.find((item) => item.id === id);
  const { id } = useParams(); // Get item ID from the URL
  const [{ foodItems }] = useStateValue();
  // const product = foodItems.find((item) => item.id === Number(id));
  const { state } = useLocation();
  const product = state?.product;
  useEffect(() => {
    console.log("URL ID:", id);
    console.log("Data:", product);
  }, [id]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen bg-transparent md:mb-10"
      >
        <div className="lg:px-20 md:px-6 px-4 md:flex items-start">
          <div className="xl:w-96 md:w-80 flex flex-col flex-shrink-0">
            <img src={item.img} alt="Image of a shoe" className="w-full" />
            <div className="flex items-center md:justify-between justify-center mt-7">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/front.png" alt="Image of a shoe" className="sm:w-1/2 w-40 pr-3" />
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/back.png" alt="Image of a shoe" className="sm:w-1/2 w-40 pl-3" />
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.15533 13.0303C7.86244 13.3232 7.38756 13.3232 7.09467 13.0303L2.59467 8.53033C2.30178 8.23744 2.30178 7.76256 2.59467 7.46967L7.09467 2.96967C7.38756 2.67678 7.86244 2.67678 8.15533 2.96967C8.44822 3.26256 8.44822 3.73744 8.15533 4.03033L4.18566 8L8.15533 11.9697C8.44822 12.2626 8.44822 12.7374 8.15533 13.0303Z" fill="#9CA3AF" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.625 8C13.625 8.41421 13.2892 8.75 12.875 8.75L3.75 8.75C3.33579 8.75 3 8.41421 3 8C3 7.58579 3.33579 7.25 3.75 7.25L12.875 7.25C13.2892 7.25 13.625 7.58579 13.625 8Z" fill="#9CA3AF" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer ml-4">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.84467 2.96967C8.13756 2.67678 8.61244 2.67678 8.90533 2.96967L13.4053 7.46967C13.6982 7.76256 13.6982 8.23744 13.4053 8.53033L8.90533 13.0303C8.61244 13.3232 8.13756 13.3232 7.84467 13.0303C7.55178 12.7374 7.55178 12.2626 7.84467 11.9697L11.8143 8L7.84467 4.03033C7.55178 3.73744 7.55178 3.26256 7.84467 2.96967Z" fill="#1F2937" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.375 8C2.375 7.58579 2.71079 7.25 3.125 7.25H12.25C12.6642 7.25 13 7.58579 13 8C13 8.41421 12.6642 8.75 12.25 8.75H3.125C2.71079 8.75 2.375 8.41421 2.375 8Z" fill="#1F2937" />
                </svg>
              </div>
            </div>
          </div>
          <div className="xl:ml-32 md:ml-6 md:mt-0 mt-10 lg:max-w-lg md:max-w-sm">
            <h1 className="lg:text-2xl md:text-xl text-lg font-medium lg:leading-6 md:leading-5 leading-5 text-gray-800">Bone Runner</h1>
            <p className="text-sm leading-normal text-gray-600 mt-4">Starting suspicious evaluated should, systems a there would half way.
                 The and the right seemed line have in room. He a be was. To because two hand, palace lieutenant general antiquity pervasively.</p>
            <p className="lg:text-2xl font-medium lg:leading-6 text-lg leading-5 mt-8 text-gray-800">$127</p>
            <div className="mt-12 lg:flex items-start">
              <p className="text-base leading-4 text-gray-800">Select Color</p>
              <div className="lg:ml-16 lg:mt-0 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-20 h-8">
                    <div className="flex items-center justify-center flex-1 h-full px-5 py-2 border border-gray-600">
                      <p className="text-sm leading-none text-gray-800">Brown</p>
                    </div>
                  </div>
                  <div className="w-20 h-8 cursor-pointer hover:border-gray-600 group border border-gray-300 flex items-center justify-center">
                    <p className="text-sm leading-none text-center text-gray-600 hover:text-gray-800">Black</p>
                  </div>
                  <div className="w-20 h-8 cursor-pointer hover:border-gray-600 group border border-gray-300 flex items-center justify-center">
                    <p className="text-sm leading-none text-center text-gray-600 hover:text-gray-800">Blue</p>
                  </div>
                  <div className="w-20 h-8 cursor-pointer hover:border-gray-600 group border border-gray-300 flex items-center justify-center">
                    <p className="text-sm leading-none text-center text-gray-600 hover:text-gray-800">Orange</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-20 h-8 cursor-pointer hover:border-gray-600 group border border-gray-300 flex items-center justify-center">
                    <p className="text-sm leading-none text-center text-gray-600 hover:text-gray-800">Red</p>
                  </div>
                  <div className="w-20 h-8 cursor-pointer hover:border-gray-600 group border border-gray-300 flex items-center justify-center">
                    <p className="text-sm leading-none text-center text-gray-600 hover:text-gray-800">White</p>
                  </div>
                  <div className="w-20 h-8 cursor-pointer hover:border-gray-600 group border border-gray-300 flex items-center justify-center">
                    <p className="text-sm leading-none text-center text-gray-600 hover:text-gray-800">Yellow</p>
                  </div>
                  <div className="w-20 h-8 cursor-pointer hover:border-gray-600 group border border-gray-300 flex items-center justify-center">
                    <p className="text-sm leading-none text-center text-gray-600 hover:text-gray-800">Grey</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex items-start justify-between mt-12">
              <div className="lg:w-1/2 relative">
                <div onClick={() => setShow(!show)} className="h-10 px-4 border border-gray-600 text-white
                 flex justify-between items-center w-full cursor-pointer">
                  <p id="textClicked" className="text-base leading-none text-gray-600">
                    {text}
                  </p>
                  <svg id="ArrowSVG" className="transform" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="#4B5563" />
                  </svg>
                </div>
                {/* {show && (
                  <ul className="font-normal text-base leading-4 absolute w-full">
                    <li
                      onClick={() => {setText("12"), setShow(false);}}
                      className="py-3 px-4 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer"
                    >
                      12
                    </li>
                    <li
                      onClick={() => {
                        setText("13"), setShow(false);
                      }}
                      className="py-3 px-4 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer"
                    >
                      13
                    </li>
                    <li
                      onClick={() => {
                        setText("14"), setShow(false);
                      }}
                      className="py-3 px-4 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer"
                    >
                      14
                    </li>
                    <li
                      onClick={() => {
                        setText("14"), setShow(false);
                      }}
                      className="py-3 px-4 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer"
                    >
                      15
                    </li>
                  </ul>
                )} */}
                <p className="text-sm leading-none text-gray-600 mt-2">Size not available?</p>
              </div>
              <div className="lg:w-1/2 lg:ml-4 lg:mt-0 mt-4">
                <button className="bg-gray-800 h-10 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 text-base leading-none text-white py-3 w-full px-2">Add to cart</button>
              </div>
            </div>
            <div className="xl:block hidden">
              <div id="mainHeading" className="flex justify-between items-center w-full border-t border-gray-300 mt-12 py-4">
                <div className>
                  <p className="text-base leading-4 text-gray-800">Product Care</p>
                </div>
                <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                  <svg className="transform text-gray-800" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="#4B5563" />
                  </svg>
                </button>
              </div>
              <div id="menu" className="hidden mt-6 pb-4 w-full">
                <p className="text-base leading-6 text-gray-800 font-normal">product care description</p>
              </div>
              <div>
                <div id="mainHeading" className="flex justify-between items-center w-full border-t border-gray-300 py-4">
                  <div className>
                    <p className="text-base leading-4 text-gray-800">Shipping &amp; Returns</p>
                  </div>
                  <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                    <svg className="transform text-gray-800" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="#4B5563" />
                    </svg>
                  </button>
                </div>
                <div id="menu" className="hidden mt-6 pb-4 w-full">
                  <p className="text-base leading-6 text-gray-800 font-normal">Shipping &amp; Returns description</p>
                </div>
              </div>
              <div className="mb-4 border-b border-gray-300">
                <div id="mainHeading" className="flex justify-between items-center w-full border-t border-gray-300 py-4">
                  <div className>
                    <p className="text-base leading-4 text-gray-800">Details &amp; Care</p>
                  </div>
                  <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                    <svg className="transform text-gray-800" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="#4B5563" />
                    </svg>
                  </button>
                </div>
                <div id="menu" className="hidden mt-6 pb-4 w-full">
                  <p className="text-base leading-6 text-gray-800 font-normal">Details &amp; Care description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:hidden lg:px-20 md:px-6 px-4">
          <div id="mainHeading" className="flex justify-between items-center w-full border-t border-gray-300 mt-12 py-4">
            <div className>
              <p className="text-base leading-4 text-gray-800">Product Care</p>
            </div>
            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
              <svg className="transform text-gray-800" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="#4B5563" />
              </svg>
            </button>
          </div>
          <div id="menu" className="hidden mt-6 pb-4 w-full">
            <p className="text-base leading-6 text-gray-800 font-normal">product care description</p>
          </div>
          <div>
            <div id="mainHeading" className="flex justify-between items-center w-full border-t border-gray-300 py-4">
              <div className>
                <p className="text-base leading-4 text-gray-800">Shipping &amp; Returns</p>
              </div>
              <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                <svg className="transform text-gray-800" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="#4B5563" />
                </svg>
              </button>
            </div>
            <div id="menu" className="hidden mt-6 pb-4 w-full">
              <p className="text-base leading-6 text-gray-800 font-normal">Shipping &amp; Returns description</p>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-4">
            <div id="mainHeading" className="flex justify-between items-center w-full border-t border-gray-300 py-4">
              <div className>
                <p className="text-base leading-4 text-gray-800">Details &amp; Care</p>
              </div>
              <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" data-menu>
                <svg className="transform text-gray-800" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="#4B5563" />
                </svg>
              </button>
            </div>
            <div id="menu" className="hidden mt-6 pb-4 w-full">
              <p className="text-base leading-6 text-gray-800 font-normal">Details &amp; Care description</p>
            </div>
          </div>
        </div>
      </div>
  );
}


// import React, {useEffect} from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// // import data from '../utils/data';

// import { useStateValue } from '../../../context/StateProvider';

// const ProductDetails = ({data}) => {
  // const { id } = useParams(); // Get item ID from the URL
  // const [{ foodItems }] = useStateValue();
  // // const product = foodItems.find((item) => item.id === Number(id));
  // const { state } = useLocation();
  // const product = state?.product;
  // useEffect(() => {
  //   console.log("URL ID:", id);
  //   console.log("Data:", product);
  // }, [id]);

  // if (!product) {
  //   return <p>Product not found</p>;
  // }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen bg-transparent md:mb-10">
//       <h1>{product.title}</h1>
//       <img src={product.imageURL} alt={product.title} />
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//     </div>
//   );
// };

// export default ProductDetails;
