import React from "react";

const LeftChild = ({ data, onItemClick, selectedId }) => {
  return (
    <div className="border-1 border-gray-200 mt-20 ml-1">
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`p-3
            m-1 rounded-lg
            cursor-pointer
            shadow-sm
            text-lg 
            font-semibold 
            text-white
            uppercase
            ${
              selectedId === item.id
                ? "bg-green-500"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftChild;
