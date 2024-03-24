import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-between h-[80vh]">
      <div className=" text-center mx-auto lg:mx-0">
        <div className=" space-y-4 text-center">
          <h1 className="lg:text-7xl text-5xl font-semibold">JSONify React</h1>
          <p className="text-2xl font-normal">
            Get dummy/fake JSON data to use as placeholder in{" "}
            <br className=" hidden md:block" />
            development or in prototype testing.
          </p>
          <div className=" space-x-6">
            <button className="px-2 py-2 w-28 rounded bg-black text-white">
              <a
                href={"https://github.com/sonusahuz/jsonify-react"}
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button className="px-2 py-2 w-28 rounded border-2">
              <Link href={"/docs"}> Read Docs</Link>
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block">
        <pre className="text-sm bg-black text-white p-4 rounded">
          {`[
"id": 10,
"title": "HP Pavilion 15-DK1056WM",
"description": "HP Pavilion 15-DK1056WM Gaming...",
"price": 1099,
"discountPercentage": 6.18,
                          "rating": 4.43,
"stock": 89,
 "brand": "HP Pavilion",
"category": "laptops",
"thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg",
"images": [
  "https://cdn.dummyjson.com/product-images/10/1.jpg",
  "https://cdn.dummyjson.com/product-images/10/2.jpg",
  "https://cdn.dummyjson.com/product-images/10/3.jpg",
  "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg"
  ]
}`}
        </pre>
      </div>
    </div>
  );
};

export default Home;
