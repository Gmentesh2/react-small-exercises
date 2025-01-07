import { useState } from "react";

const ImageToggler = () => {
  const [showImage, setShowImage] = useState(true);
  return (
    <div>
      <button onClick={() => setShowImage(!showImage)} style={{ display: "block" }}>Toggle Image</button>
      {showImage && (
        <img
          src="https://th.bing.com/th?id=OIP.OmszxJcT8NO06xdukAihmwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt=""
        />
      )}
    </div>
  );
};

export default ImageToggler;
