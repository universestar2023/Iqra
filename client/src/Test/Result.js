// import React from "react";
// import { Link } from "react-router-dom";
// import ResultTable from "./ResultTable";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   attempts_Number,
//   earnPoints_Number,
//   flagResult,
// } from "../helper/helper";
// import { resetAllAction } from "../redux/question_reducer";
// import { resetResultAction } from "../redux/result_reducer";
// import { usePublishResult } from "../hooks/setResult";

// export default function Result() {
//   const dispatch = useDispatch();
//   const {
//     questions: { queue, answers },
//     result: { result, userId },
//   } = useSelector((state) => state);

//   const totalPoints = queue.length * 10;
//   const attempts = attempts_Number(result);
//   const earnPoints = earnPoints_Number(result, answers, 10);
//   const flag = flagResult(totalPoints, earnPoints);

//   /** store user result */
//   usePublishResult({
//     result,
//     username: userId,
//     attempts,
//     points: earnPoints,
//     achived: flag ? "Passed" : "Failed",
//   });

//   function onRestart() {
//     dispatch(resetAllAction());
//     dispatch(resetResultAction());
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Result
//         </h1>

//         <div className="flex flex-col space-y-4">
//           <div className="flex justify-between">
//             <span className="font-semibold">Username:</span>
//             <span className="font-bold text-gray-700">{userId || ""}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Total Quiz Points:</span>
//             <span className="font-bold text-gray-700">{totalPoints || 0}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Total Questions:</span>
//             <span className="font-bold text-gray-700">{queue.length || 0}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Total Attempts:</span>
//             <span className="font-bold text-gray-700">{attempts || 0}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Total Earn Points:</span>
//             <span className="font-bold text-gray-700">{earnPoints || 0}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Quiz Result:</span>
//             <span
//               className={`font-bold ${
//                 flag ? "text-green-500" : "text-red-500"
//               }`}
//             >
//               {flag ? "Passed" : "Failed"}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex justify-center">
//         <Link
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
//           to={"/test"}
//           onClick={onRestart}
//         >
//           Restart
//         </Link>
//       </div>

//       <div className="container mt-8">
//         {/* Result table */}
//         <ResultTable />
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { usePublishResult } from "../hooks/setResult";
import CareerResult from "./CarrerResult";
export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);
  const selectedAnswers=useSelector((state) => state.result.result);
  /** store user result */
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="container mx-auto p-6">
      <CareerResult selectedAnswers={selectedAnswers} />
      <div className="mt-6 flex justify-center">
        <Link
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          to={"/test"}
          onClick={onRestart}
        >
          Restart
        </Link>
      </div>
    </div>
  );
}
