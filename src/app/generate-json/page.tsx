"use client";
import { useState } from "react";
import { faker, simpleFaker } from "@faker-js/faker";
import { Copy } from "lucide-react";

export default function FakerJson() {
  const [numUsers, setNumUsers] = useState<number>(1);
  const [userData, setUserData] = useState<object[]>([]);

  const generateData = () => {
    const data = [];
    for (let i = 0; i < numUsers; i++) {
      const user = {
        id: simpleFaker.string.nanoid(10),
        name: faker.name.firstName(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        phone: faker.phone.number(),
      };
      data.push(user);
    }
    setUserData(data);
  };

  const handleNumUsersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumUsers(parseInt(e.target.value));
  };

  const copyToClipboard = () => {
    const jsonText = JSON.stringify(userData, null, 2);
    navigator.clipboard
      .writeText(jsonText)
      .then(() => {
        alert("JSON data copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div className="container mx-auto flex items-center justify-center mt-10 flex-wrap">
      <main className="mt-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Fake JSON Generator
        </h1>
        <div className="mb-6 mx-auto">
          <label htmlFor="numUsers" className="mr-2">
            Number of Users:
          </label>
          <input
            type="number"
            id="numUsers"
            min="1"
            value={numUsers}
            onChange={handleNumUsersChange}
            className="border border-gray-400 px-2 py-2 rounded"
          />
          <button
            onClick={generateData}
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate
          </button>
        </div>
        <div>
          {userData.length > 0 && (
            <div>
              <Copy
                onClick={copyToClipboard}
                className="text-black absolute ml-[450px] mt-4 cursor-pointer"
              />
              <pre className="bg-gray-200 p-4 rounded">
                {JSON.stringify(userData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
