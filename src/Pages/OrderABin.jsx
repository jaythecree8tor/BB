import React from 'react'

function OrderABin() {
  return (
<div className="mx-auto flex flex-col items-center py-12 sm:py-16">
  <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
      Order A Bin Today!!
    </h1>
    <p className="text-primary dark:text-secondary opacity-75 md:pr-10 my-6 md:text-lg 2xl:text-xl text-center">
      Order for your Blue Bin today to make a positive impact on the environment and society and become Recycling Ambassadors for a Cleaner Lagos.
    </p>
    <a href="https://buylawmabin.com">
      <button className="w-full sm:w-auto p-2 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100">
        Order Bin
      </button>
    </a>
  </div>
</div>
  )
}

export default OrderABin
//#fafbfc