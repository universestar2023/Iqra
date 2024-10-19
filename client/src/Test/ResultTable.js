import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/route/result`,
      (res) => {
        const updatedData = res.reduce((acc, current) => {
          const existingUserIndex = acc.findIndex(user => user.username === current.username);
          if (existingUserIndex !== -1) {
            // Update existing entry
            acc[existingUserIndex] = {
              ...acc[existingUserIndex],
              attempts: current.attempts, // Update attempts with new value
              points: acc[existingUserIndex].points + current.points
            };
          } else {
            // Add new entry
            acc.push(current);
          }
          return acc;
        }, []);

        // Sort data based on earned points in descending order
        const sortedData = updatedData.sort((a, b) => b.points - a.points);

        setData(sortedData);
      }
    );
  }, []);

  return (
    <div className="my-6 p-4 bg-white shadow-md rounded-lg">
      <div className="text-center text-2xl font-bold mb-4 LeaderBoard">LeaderBoard</div>
      <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Attempts</th>
            <th className="py-2 px-4 border-b">Earn Points</th>
          </tr>
        </thead>
        <tbody>
          {!data.length && (
            <tr>
              <td colSpan="3" className="py-2 text-center text-gray-500">No Data Found</td>
            </tr>
          )}
          {data.map((v, i) => (
            <tr className="hover:bg-gray-200 transition-colors duration-200" key={i}>
              <td className="py-2 px-4 border-b">{v?.username || ""}</td>
              <td className="py-2 px-4 border-b">{v?.attempts || 0}</td>
              <td className="py-2 px-4 border-b">{v?.points || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
