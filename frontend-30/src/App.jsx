import { useState } from "react";

import "./App.css";
import ControlledForm from "./day-5/ControlledForm";
// import InfiniteScrollThroatliing from "./day-4/InfiniteScrollThroatliing";
// import EffectHook from "./day-5/EffectHook";
// import StarRating from "./day-1/StarRating";
// import Modal from "./day-1/Modal";
// import CountDownTimer from "./day-2/CountDownTimer";
// import UseReducer from "./day-3/UseReducer";

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        <Modal
         isOpen={isOpen} isClose={() => setIsOpen(false)}>
          <StarRating />
        </Modal> */}

      {/* <CountDownTimer/> */}
      {/* <UseReducer/> */}
      {/* <InfiniteScrollThroatliing/> */}
      {/* <EffectHook/> */}
      <ControlledForm />
    </>
  );
}

export default App;
