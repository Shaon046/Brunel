import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-[581px] m-auto">
      {items.map((item, index) => (
        <div key={index} className="text-[20px] font-[600] ">
          <div
            className="flex justify-between border-b-[1px] pb-[24px] border-gray-500"
            onClick={() => onItemClick(index)}
          >
            {item.title}
            <AddIcon />
          </div>
          {index === activeIndex && (
            <div className="text-[15px] font-[400] pt-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
