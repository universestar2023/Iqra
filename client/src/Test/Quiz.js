// import React, { useState } from "react";
// import Questions from "./Questions";
// import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
// import { PushAnswer } from "../hooks/setResult";
// import { useSelector, useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function Quiz() {
//   const [check, setChecked] = useState(undefined);
//   const result = useSelector((state) => state.result.result);
//   const { queue, trace } = useSelector((state) => state.questions);
//   const dispatch = useDispatch();

//   /** next button event handler */
//   function onNext() {
//     if (trace < queue.length) {
//       /** increase the trace value by one using MoveNextAction */
//       dispatch(MoveNextQuestion());

//       /** insert a new result in the array.  */
//       if (result.length <= trace) {
//         dispatch(PushAnswer(check));
//       }
//     }

//     /** reset the value of the checked variable */
//     setChecked(undefined);
//   }

//   /** Prev button event handler */
//   function onPrev() {
//     if (trace > 0) {
//       /** decrease the trace value by one using MovePrevQuestion */
//       dispatch(MovePrevQuestion());
//     }
//   }

//   function onChecked(check) {
//     setChecked(check);
//   }

//   /** finished exam after the last question */
//   if (result.length && result.length >= queue.length) {
//     return <Navigate to={"/test/result"} replace={true}></Navigate>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Display questions with question number */}
//       <Questions onChecked={onChecked} questionNumber={trace + 1} />

//       <div className="flex justify-center gap-5 mt-6">
//         {trace > 0 ? (
//           <button
//             className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-400 transition duration-200"
//             onClick={onPrev}
//           >
//             Prev
//           </button>
//         ) : (
//           <div className="w-24"></div> // Placeholder for alignment
//         )}
//         <button
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
//           onClick={onNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  /** Next button event handler */
  function onNext() {
    if (check === undefined) {
      // If no answer is selected, prevent moving to the next question
      return;
    }

    if (trace < queue.length) {
      /** Increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());

      /** Insert a new result in the array */
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    /** Reset the value of the checked variable */
    setChecked(undefined);
  }

  /** Prev button event handler */
  function onPrev() {
    if (trace > 0) {
      /** Decrease the trace value by one using MovePrevQuestion */
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  /** Finished exam after the last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/test/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Display questions with question number */}
      <Questions onChecked={onChecked} questionNumber={trace + 1} />

      <div className="flex justify-center gap-5 mt-6">
        {trace > 0 ? (
          <button
            className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-400 transition duration-200"
            onClick={onPrev}
          >
            Prev
          </button>
        ) : (
          <div className="w-24"></div> // Placeholder for alignment
        )}
        <button
          className={`${
            check === undefined
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200`}
          onClick={onNext}
          disabled={check === undefined}
        >
          Next
        </button>
      </div>
    </div>
  );
}
