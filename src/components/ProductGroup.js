import React, { useState } from "react";

export default function ProductGroup() {
  const [product, setProduct] = useState([]);
  return (
    <div>
      <h1>Product Group</h1>
      <button>AProduct</button>
      <button>BProduct</button>
      <button>CProduct</button>
    </div>
  );
}
