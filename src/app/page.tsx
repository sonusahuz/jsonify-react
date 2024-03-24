import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center lg:h-[99vh] h-[76vh]">
      <div className=" text-center mx-auto lg:mx-0">
        <div className=" space-y-4 text-center">
          <h1 className="lg:text-7xl text-5xl font-semibold">JSONify React</h1>
          <p className="lg:text-2xl text-xl font-normal">
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
    </div>
  );
};

export default Home;
