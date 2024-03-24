import { quotesArray } from "@/utils";
import { StepBack } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Jsonify React - Quotes",
  description:
    "Get dummy/fake JSON data to use as placeholder in development or in prototype testing",
};

const Quotes = () => {
  return (
    <div>
      <div className="mb-4 w-full">
        <h1 className="text-3xl font-bold">Docs</h1>
        <p>You can use examples below to check how Jsonify React works.</p>
      </div>
      <hr />
      <div>
        <h1 className="text-2xl font-semibold mt-4">Users</h1>
        {quotesArray.map((item) => (
          <div className="mt-4 mb-12" id={item.id} key={item.id}>
            <h1 className="text-xl font-bold">
              <span className={item.className}>{item.method}</span>
              {item.label}
            </h1>
            <pre className="bg-black mt-2 text-xs p-4 rounded text-gray-400 overflow-x-scroll sm:overflow-visible">
              {item.code}
            </pre>
            {(item.id === "get-all-quotes" ||
              item.id === "get-a-single-quote" ||
              item.id === "limit-skip-quotes" ||
              item.id === "search-quotes") && (
              <button className="px-2 py-2 text-xs mt-2 w-20 bg-black text-white rounded">
                <Link href={item.href}>Try it now</Link>
              </button>
            )}{" "}
          </div>
        ))}
        <hr />
      </div>
      <div className="my-6 flex items-center justify-center mx-auto gap-10">
        <Link
          href={"/recipes"}
          className="flex items-center justify-center gap-2 px-2 py-2 w-28 rounded bg-black text-white"
        >
          <StepBack size={20} />
          <span>Recipes</span>
        </Link>
      </div>
    </div>
  );
};

export default Quotes;
