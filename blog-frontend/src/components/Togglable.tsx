import { useState } from "react";

const Togglable = ({
  children,
  btnLabel,
}: {
  children: any;
  btnLabel: string;
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        style={{ display: visible ? "none" : "block" }}
      >
        {btnLabel}
      </button>
      <div style={{ display: !visible ? "none" : "block" }}>
        {children}
        <button onClick={() => setVisible(!visible)}>Cancel</button>
      </div>
    </>
  );
};

export default Togglable;
