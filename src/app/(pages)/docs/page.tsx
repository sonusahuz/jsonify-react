import { dataArray, dataArray2, dataArray3 } from "@/utils";
import { StepForward } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Get dummy/fake JSON data to use as placeholder in development or in prototype testing",
};
const Docs = () => {
  return (
    <div className="mb-10 ">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold">How to use it</h1>
        <p className="text-sm mt-1">
          JSONify React can be used with any type of front end project that
          needs products, recipes, users, todos or any dummy data in JSON
          format. You can use examples below to check how JSONify React works.
          Feel free to enjoy it in your awesome projects!
        </p>
      </div>
      <hr />
      <div className="mt-5">
        <h1 className="text-3xl font-semibold">Intro</h1>
        <div className="mt-5">
          <h1 className="text-xl font-bold">Test Route</h1>
          <p className="text-sm">See if your internet is working 😉</p>
          <pre className="bg-black mt-2 text-xs p-4 rounded text-gray-400">
            {`fetch('//jsonifyreact.vercel.app/api/products')
.then((res) => res.json())
.then((data) => console.log(data))
`}
          </pre>
          <button className="px-2 py-2 text-xs mt-2 w-20 bg-black text-white rounded">
            <Link href={"/api/products"}> Try it now</Link>
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-1 mt-6 lg:mt-0">
            Resources
          </h1>
          <p>JSONify React comes with different sets of common resources:</p>
        </div>

        <div className="mt-5">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Resources</h1>
            <p className="text-sm">
              Following resources are available which you can access via our
              REST API.
            </p>
          </div>
          <ul className="space-y-2 mb-6 lg:w-96">
            {dataArray2.map((item) => (
              <li className="flex items-start justify-start" key={item.id}>
                <Link
                  href={item.href}
                  className=" text-green-600 w-60 hover:underline hover:text-green-500"
                >
                  {item.label}
                </Link>
                <span className="">{item.count}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <p className="text-sm">
              <strong>Note: </strong> by default you will get 30 results and the
              total count, you can pass skip & limit query string to get more
              results. For example: /api/posts?skip=5&limit=10
            </p>
          </div>
        </div>

        <div className="mt-6 ">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Routes</h1>
            <p className="text-sm">
              All HTTP methods are supported. You can use http or https for your
              requests.
            </p>
          </div>
          <ul className="space-y-2 mb-2 w-full">
            {dataArray.map((item) => (
              <li
                className="flex items-start justify-start flex-wrap gap-2 border-2 p-2 rounded lg:border-0 lg:p-0"
                key={item.id}
              >
                <span className="w-28 font-bold">{item.method}</span>
                <Link
                  href={item.href}
                  className=" text-green-600 text-left w-80 hover:underline hover:text-green-500"
                >
                  {item.label}
                </Link>
                <span className="">{item.description}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 mb-6 w-full">
            {dataArray3.map((item) => (
              <li
                className="flex items-start justify-start flex-wrap gap-2 border-2 p-2 rounded lg:border-0 lg:p-0"
                key={item.id}
              >
                <span className="w-28 font-bold">{item.method}</span>
                <span className="w-80"> {item.label}</span>
                <span className="">{item.description}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <p className="text-sm">
              <strong>Note: </strong> by default you will get 30 results and the
              total count, you can pass skip & limit query string to get more
              results. For example: /posts?skip=5&limit=10
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center mx-auto">
          <Link
            href={"/users"}
            className="flex items-center justify-center gap-2 px-2 py-2 w-28 rounded bg-black text-white"
          >
            <span>Users</span>
            <StepForward size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Docs;
