// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useFetchQestion } from "../hooks/FetchQuestion";
// import { updateResult } from "../hooks/setResult";

// export default function Questions({ onChecked, questionNumber }) {
//   const [checked, setChecked] = useState(undefined);
//   const { trace } = useSelector((state) => state.questions);
//   const result = useSelector((state) => state.result.result);
//   const [{ isLoading, apiData, serverError }] = useFetchQestion();

//   const questions = useSelector(
//     (state) => state.questions.queue[state.questions.trace]
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(updateResult({ trace, checked }));
//   }, [checked]);

//   function onSelect(i) {
//     onChecked(i);
//     setChecked(i);
//     dispatch(updateResult({ trace, checked }));
//   }

//   if (isLoading) {
//     return (
      
//      <div className="flex justify-center items-center h-screen">
//       <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-blue-500 border-r-transparent"></div>
//     </div>
//     );
//   }
  
//   if (serverError) {
//     const errorMessage =
//       typeof serverError === "object" ? serverError.message : serverError;
//     return <h3 className="text-red-500 text-center">{errorMessage || "Unknown Error"}</h3>;
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <div className="mb-4">
//         <span className="text-lg font-semibold">Question {questionNumber}:</span>
//         <span className="block mt-1 text-gray-700">{questions?.question}</span>
//       </div>
//       <ul className="space-y-4">
//         {questions?.options.map((q, i) => (
//           <li key={i} className="flex items-center">
//             <input
//               type="radio"
//               value={false}
//               name="options"
//               id={`q${i}-option`}
//               onChange={() => onSelect(i)}
//               className="hidden peer"
//             />
//             <label
//               className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-100 peer-checked:bg-blue-200`}
//               htmlFor={`q${i}-option`}
//             >
//               {q}
//               <div
//                 className={`check w-4 h-4 border-2 rounded-full ${
//                   result[trace] === i ? "bg-blue-500" : "bg-white"
//                 }`}
//               ></div>
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked, questionNumber }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  // Reset checked state when the trace changes (i.e., when the question changes)
  useEffect(() => {
    setChecked(undefined);  // Reset the checked value when moving to the next question
  }, [trace]);

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked, trace]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);  // Set checked answer when the user selects an option
    dispatch(updateResult({ trace, checked: i })); // Store the answer in Redux
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-blue-500 border-r-transparent"></div>
      </div>
    );
  }

  if (serverError) {
    const errorMessage =
      typeof serverError === "object" ? serverError.message : serverError;
    return <h3 className="text-red-500 text-center">{errorMessage || "Unknown Error"}</h3>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <span className="text-lg font-semibold">Question {questionNumber}:</span>
        <span className="block mt-1 text-gray-700">{questions?.question}</span>
      </div>
      <ul className="space-y-4">
        {questions?.options.map((q, i) => (
          <li key={i} className="flex items-center">
            <input
              type="radio"
              value={i}
              name="options"
              id={`q${i}-option`}
              checked={checked === i}  // Ensure the radio button reflects the selected answer
              onChange={() => onSelect(i)}
              className="hidden peer"
            />
            <label
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-100 peer-checked:bg-blue-200`}
              htmlFor={`q${i}-option`}
            >
              {q}
              <div
                className={`check w-4 h-4 border-2 rounded-full ${
                  result[trace] === i ? "bg-blue-500" : "bg-white"
                }`}
              ></div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
