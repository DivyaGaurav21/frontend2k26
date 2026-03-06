import React, { useState } from "react";
const data = [
  {
    id: 1,
    title: "Introduction to React",
    content:
      "React is a popular JavaScript library used for building user interfaces.",
  },
  {
    id: 2,
    title: "Understanding Components",
    content:
      "Components are reusable pieces of UI that help structure a React application.",
  },
];

const Accordion = () => {
  const [activeItems, setActiveIdItems] = useState([]);

  const toggleAccordion = (id) => {
    setActiveIdItems((prev) => {
      if (activeItems.includes(id)) {
        return prev.filter(item => item != id);
      }else{
        return [...prev , id]
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-black p-2 "
            onClick={() => toggleAccordion(item.id)}
          >
            <div className="flex flex-row justify-between">
              <p>
                {item.id}. {item.title}
              </p>
              <span>{activeItems.includes(item.id) ? "🔽" : "🔼"}</span>
            </div>
            {activeItems.includes(item.id) && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
