import React, { forwardRef, useRef, useEffect } from "react";

export const Checkbox = forwardRef(({ inderterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.inderterminate = inderterminate;
  }, [resolvedRef, inderterminate]);

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});
