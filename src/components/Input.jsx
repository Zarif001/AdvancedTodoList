import React from "react";
import { forwardRef } from "react";

const classes =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus-within:border-stone-600";

export default forwardRef(function Input(
  { textarea, label, type, ...props },
  ref
) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500" {...props}>
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props} type={type} />
      )}
    </p>
  );
});
