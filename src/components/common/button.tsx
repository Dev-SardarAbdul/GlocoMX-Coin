import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  btnName?: any;
}

const Buttons: React.FC<Props> = ({ btnName }: { btnName?: any }) => {
  return (
    <>
      <Button
        style={{
          background: "#FFC300",
          color: "white",
          border: "2px solid #FFC300",
          padding: "5px",
          fontSize: 18,
          borderRadius: "20px",
          width: "200px",
        }}
      >
        {btnName}
      </Button>
    </>
  );
};

export default Buttons;
