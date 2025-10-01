import type { RefObject } from "react";

// ❌ forwardRef 없이 그냥 함수 컴포넌트
const MyInput = (props : {input:string}) => {
  return <input value={props.input} type="text" />;
};

export default MyInput;
