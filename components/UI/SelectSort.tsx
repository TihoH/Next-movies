import React, { FC } from "react";

interface SelectSortProps {
  defaultValue: string;
  sortArr: any[];
  onChange: any;
  isMarker?: boolean;
}

const SelectSort: FC<SelectSortProps> = ({
  defaultValue,
  sortArr,
  onChange,
}) => {
  return (
    <select
      onChange={onChange}
      className="bg-gray-600/50 px-4 py-3 rounded-sm outline-none cursor-pointer min-w-[220px]"
    >
      <option value="">{defaultValue}</option>
      {sortArr.map((sortItem, index) => (
        <option
          key={index}
          className=" bg-gray-600/50 "
          value={sortItem.id || sortItem.name ||  sortItem.value}
        >
          {sortItem.name || sortItem.nameRating}
        </option>
      ))}
    </select>
  );
};

export default SelectSort;
