import Select, { components } from "react-select";

import { ChevronUpIcon } from "../../../assets/icons/ChevronUpIcon";

const customStyles = {
  control: (provided) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: "#395F8C",
    border: "unset",
    boxShadow: "unset",
  }),
  indicatorsContainer: (provided, { selectProps }) => ({
    ...provided,
    transform: `rotate(${selectProps.menuIsOpen ? 180 : 0}deg)`,
  }),
  indicatorSeparator: () => ({}),
  placeholder: (provided) => ({
    ...provided,
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#395F8C" : "#fff",
    cursor: "pointer",
    ":active": {
      color: "#fff",
      backgroundColor: "#395F8C",
    },
    ":hover": {
      color: "#fff",
      backgroundColor: "#203c5f",
    },
  }),
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ChevronUpIcon />
  </components.DropdownIndicator>
);

const CustomSelect = ({ options, value, onChange }) => (
  <Select
    // closeMenuOnSelect={false}
    components={{ DropdownIndicator }}
    styles={customStyles}
    options={options}
    value={value}
    onChange={onChange}
  />
);

export default CustomSelect;
