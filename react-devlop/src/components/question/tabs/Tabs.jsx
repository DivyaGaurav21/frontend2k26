// import React, { useState } from "react";

// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

// const Tabs = () => {
//     const [tab, setTab] = useState("home");

//     return <div>
//         <div className="flex flex-row gap-2 pb-2 border-b-2 border-amber-300">
//             <button className="btn" onClick={() => setTab('home')}>Home</button>
//             <button className="btn" onClick={() => setTab('about')}>About</button>
//             <button className="btn" onClick={() => setTab('contact')}>Contact</button>
//         </div>
//         {tab == "home" && <Home />}
//         {tab == "about" && <About />}
//         {tab == "contact" && <Contact />}
//     </div>;
// };

// export default Tabs;

// ---------------

// import React, { useState } from "react";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

// const Tabs = () => {
//   const tabs = [
//     { label: "Home", value: "home", component: <Home /> },
//     { label: "About", value: "about", component: <About /> },
//     { label: "Contact", value: "contact", component: <Contact /> },
//   ];

//   const [activeTab, setActiveTab] = useState("home");

//   return (
//     <div>
//       <div className="flex gap-2 border-b pb-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab.value
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200"
//             }`}
//             onClick={() => setActiveTab(tab.value)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className="mt-4">
//         {tabs.find((tab) => tab.value === activeTab)?.component}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

// --------------------

import React, { useState } from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Tabs = () => {
  const [active, setActive] = useState(0);

  const tabs = [
    { label: "home", component: Home },
    { label: "about", component: About },
    { label: "contact", component: Contact },
  ];

  const TabComponent = tabs[active].component;

  return (
    <div>
      <div className="flex flex-row gap-1">
        {tabs.map((tab , i) => (
          <button
           key={tab.label}
            className={`p-2 cursor-pointer ${ i === active ? "bg-white text-black border" : "bg-black text-white"}`}
             onClick={() => setActive(i)}
             >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border h-96 mt-4">
        <TabComponent />
      </div>
    </div>
  );
};

export default Tabs;
