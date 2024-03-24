import { postsArray } from "@/utils";
import { SkipBack, StepForward } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Jsonify React - Posts",
  description:
    "Get dummy/fake JSON data to use as placeholder in development or in prototype testing",
};

const Posts = () => {
  return (
    <div>
      <div className="mb-4 w-full">
        <h1 className="text-3xl font-bold">Docs</h1>
        <p>You can use examples below to check how Jsonify React works.</p>
      </div>
      <hr />
      <div>
        <h1 className="text-2xl font-semibold mt-4">Posts</h1>
        {postsArray.map((item) => (
          <div className="mt-4 mb-12" id={item.id} key={item.id}>
            <h1 className="text-xl font-bold">
              <span className={item.className}>{item.method}</span>
              {item.label}
            </h1>
            <pre className="bg-black mt-2 text-xs p-4 rounded text-gray-400">
              {item.code}
            </pre>
            {(item.id === "get-all-posts" ||
              item.id === "get-a-single-post" ||
              item.id === "limit-skip-posts" ||
              item.id === "search-posts") && (
              <button className="px-2 py-2 text-xs mt-2 w-20 bg-black text-white rounded">
                <Link href={item.href}>Try it now</Link>
              </button>
            )}
          </div>
        ))}
        <hr />
      </div>
      <div className="my-6 flex items-center justify-center mx-auto gap-10">
        <Link
          href={"/todos"}
          className="flex items-center justify-center gap-2 px-2 py-2 w-28 rounded bg-black text-white"
        >
          <SkipBack size={20} />
          <span>Todos</span>
        </Link>
        <Link
          href={"/recipes"}
          className="flex items-center justify-center gap-2 px-2 py-2 w-28 rounded bg-black text-white"
        >
          <span>Recipes</span>
          <StepForward size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Posts;
