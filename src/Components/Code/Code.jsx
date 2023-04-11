import React from "react";

const Code = ({filename, children }) => {
  return (
    <div className="p-4 rounded-xl bg-slate-700 text-blue-400 my-4">
        <h6 className="font-bold text-white mb-4">{filename}</h6>
      <div className="p-4 rounded bg-slate-900 overflow-auto">
        
        <code>
          <pre>{children}</pre>
        </code>
      </div>
    </div>
  );
};

export default Code;
