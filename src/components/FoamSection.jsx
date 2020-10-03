import React from "react";

const FoamSection = props => {
  const { title, children } = props;
  return (
    <section>
      <p>{title}</p>
      {children}
    </section>
  );
};

export default FoamSection;
