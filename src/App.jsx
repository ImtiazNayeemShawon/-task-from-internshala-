import React, { useState } from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import Data from "./Data";

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-2 ">
          <LeftChild
            data={Data}
            onItemClick={handleItemClick}
            selectedId={selectedId}
          />
        </div>
        <div className="col-span-3">
          <RightChild data={Data.find((item) => item.id === selectedId)} />
        </div>
      </div>
    </div>
  );
};

export default App;
