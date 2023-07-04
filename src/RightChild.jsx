import React from "react";

const RightChild = ({ data }) => {
  if (!data) {
    return <div>No item selected</div>;
  }

  return (
    <div className="mt-40 p-10 bg-gray-100 rounded-sm h-40">
      <h2 className="text-lg uppercase text-center font-semibold">
        {data.Name}
      </h2>
      <p className="text-center mt-3 text-lg ">Price: ${data.Price}</p>
      <p className="text-center mt-3 text-lg ">Item ID: {data.id}</p>
    </div>
  );
};

export default RightChild;
