import React from "react";

function Selector({ title, option, funct }) {
  return (
    <div className=" ">
      <select
      onChange={funct}
        className="bg-zinc-800 mt-2  w-[29vh] text-white px-2 py-0.5 outline-none rounded"
        id="format"
        defaultValue="0"
        name="format"
      >
        <option className="bg-white " value="0" disabled>
          {title}
        </option>
        {option.map((o, i) => (
          <option  className="bg-white text-zinc-800" key={i} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
