import React from "react";

const FoamInput = props => {
  const { src = "#", alt = "#", children, title } = props;
  return (
    <div>
      <label htmlFor={title} className="foam-input-title">
        {title}
      </label>
      <div className="foam-input-container">
        <img src={src} alt={alt} />
        {children}
      </div>
    </div>
  );
};

export default FoamInput;
