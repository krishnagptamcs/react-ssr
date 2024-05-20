import React from "react";

const Home = () => {
  return (
    <>
      <section>
        <header className="bg-yellow-300 p-4 flex items-center justify-between ">
          {/* left part  */}
          <div>
            <h1>SayaCare</h1>
          </div>

          {/* right  part  */}
          <div>
            <ul className="flex items-center gap-2">
              <li>About</li>
              <li>Faq</li>
              <li>Cart</li>
              <li>Drug</li>
            </ul>
          </div>
        </header>

        {/* main conyent  */}
        <div className="flex items-center justify-center bg-gray-300 p-24">
          <h2>Welcome to sayacare </h2>
        </div>

        {/* button section */}
        <div className="w-11/12 mx-auto flex items-center justify-around">
          <button className="rounded-md p-4 text-white bg-green-400/80 text-center">
            Click One
          </button>
          <button className="rounded-md p-4 text-white bg-purple-400/80 text-center">
            Click Two
          </button>
          <button className="rounded-md p-4 text-white bg-orange-400/80 text-center">
            Click Three
          </button>
          <button className="rounded-md p-4 text-white bg-pink-400/80 text-center">
            Click Four
          </button>
          <button className="rounded-md p-4 text-white bg-green-400/80 text-center">
            Click Five
          </button>
        </div>

        {/* Testing */}

        <p className="text-center mt-10">We will testing the ssr component here</p>
      </section>
    </>
  );
};

export default Home;
