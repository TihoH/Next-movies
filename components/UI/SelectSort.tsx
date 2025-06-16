import React, { FC } from "react";

interface SelectSortProps {
  defaultValue: string;
  sortArr: any[];
  onChange:any
}

const SelectSort: FC<SelectSortProps> = ({
  defaultValue,
  sortArr,
  onChange
}) => {

  return (
    <select
      onChange={onChange}
      className="bg-gray-600/50 px-4 py-3 rounded-sm outline-none"
    >
      <option value="">{defaultValue}</option>
      {sortArr.map((sortItem) => (
        <option
          key={sortItem.id}
          className="cursor-pointer bg-gray-600/50 "
          value={sortItem.id}
        >
          <span className="cursor-pointer">{sortItem.name}</span>
        </option>
      ))}
    </select>
  );
};

export default SelectSort;
