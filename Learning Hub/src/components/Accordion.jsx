import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <h3 onClick={() => setOpen(!open)}>{title}</h3>
      {open && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
