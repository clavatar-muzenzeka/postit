import React from "react";

function FilledButtonComponent(props: { label: string }) {
  return (
    <div>
      <button className="rounded-full cursor-pointer font-md px-4 py-2 bg-gray-800 text-white active:bg-gray-900 hover:bg-gray-600">
        {props.label}
      </button>
    </div>
  );
}

export default FilledButtonComponent;
