import React from "react";
import useJakmallStore from "../../store/store";
import { Checkmark, Input, Label } from "./style";

const Checkbox = ({ labelTitle }) => {
  const context = useJakmallStore((state) => state);

  return (
    <Label>
      {labelTitle}
      <Input
        type="checkbox"
        checked={context.isDropshipper}
        onChange={(e) => context.toggleDropshipper(e.target.checked)}
      />
      <Checkmark className="checkmark"></Checkmark>
    </Label>
  );
};

export default Checkbox;
