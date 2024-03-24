import { usersArray } from "@/utils";
import { SkipBack, StepForward } from "lucide-react";
import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <div className="mb-4 w-full">
        <h1 className="text-3xl font-bold">Docs</h1>
        <p>You can use examples below to check how Jsonify React works.</p>
      </div>
      <hr />
      <div>
        <h1 className="text-2xl font-semibold mt-4">Users</h1>
        {usersArray.map((item) => (
          <div className="mt-4 mb-12" id={item.id} key={item.id}>
            <h1 className="text-xl font-bold">
              <span className={item.className}>{item.method}</span>
              {item.label}
            </h1>
            <pre className="bg-black mt-2 text-xs p-4 rounded text-gray-400">
              {item.code}
            </pre>
            {(item.id === "get-all-users" ||
              item.id === "get-a-single-user" ||
              item.id === "limit-skip-users" ||
              item.id === "search-users") && (
              <button className="px-2 py-2 text-xs mt-2 w-20 bg-black text-white rounded">
                <Link href={item.href}>Try it now</Link>
              </button>
            )}{" "}
          </div>
        ))}
        <hr />
      </div>
      <div className="my-6 flex items-center justify-center mx-auto gap-10 w-full">
        <Link
          href={"/docs"}
          className="flex items-center justify-center gap-2 px-2 py-2 w-28 rounded bg-black text-white"
        >
          <SkipBack size={20} />
          <span>Docs</span>
        </Link>
        <Link
          href={"/products"}
          className="flex items-center justify-center gap-2 px-2 py-2 w-28 rounded bg-black text-white"
        >
          <span>Products</span>
          <StepForward size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Users;
