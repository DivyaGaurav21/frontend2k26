// import React, { act, useState } from "react";
// import { products } from "./string";
// const Accordion = () => {
//   const [active, setActive] = useState(null);

//   function activeItem(id) {
//     setActive((prev) => (prev !== id ? id : null));
//   }
//   // function activeItem(id) {
//   //   if (id === active) {
//   //     setActive(null);
//   //     return;
//   //   }
//   //   setActive(id);
//   // }

//   return (
//     <>
//       <h1>Accordion</h1>
//       <ul className="list">
//         {products.map((item) => (
//           <li key={item.id}>
//             <div className="item-heading">
//               {item.title}
//               <button className="btn" onClick={() => activeItem(item.id)}>
//                 {item.id === active ? "⬇️" : "⬆️"}
//               </button>
//             </div>
//             {item.id === active && <p>{item.description}</p>}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default Accordion;




import React, { useState } from "react";
import { products } from "./string";
const Accordion = () => {
  const [active, setActive] = useState([]);

  function activeItem(id) {
    setActive((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  // function activeItem(id) {
  //   if (active.includes(id)) {
  //     setActive(active.filter((item) => item !== id));
  //     return;
  //   }
  //   setActive((prev) => [...prev, id]);
  // }

  return (
    <>
      <h1>Accordion</h1>
      <ul className="list">
        {products.map((item) => (
          <li key={item.id}>
            <div className="item-heading">
              {item.title}
              <button className="btn" onClick={() => activeItem(item.id)}>
                {active.includes(item.id) ? "⬇️" : "⬆️"}
              </button>
            </div>
            {active.includes(item.id) && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Accordion;
