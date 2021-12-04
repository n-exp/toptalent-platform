import Select, { components } from "react-select";

import { CaretDownIcon } from "../../../../assets/icons/CaretDownIcon";

const customStyles = {
  control: (provided) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: "#fff",
    border: "1px solid #8692A6",
    borderRadius: "0.375rem",
    boxShadow: "unset",
    paddingBlock: "1.3125rem",
    paddingInline: "0.6875rem",
    ":hover": {
      border: "1px solid #8692A6",
    },
  }),
  indicatorsContainer: (provided, { selectProps }) => ({
    ...provided,
    transform: `rotate(${selectProps.menuIsOpen ? 180 : 0}deg)`,
  }),
  indicatorSeparator: () => ({}),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 1.125rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#8692A6",
    fontSize: ".875rem",
    lineHeight: "1.05875rem",
    fontWeight: 500,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#8692A6",
    fontSize: "0.875rem",
    lineHeight: "1.05875rem",
    fontWeight: 500,
  }),
  menu: (provided) => ({
    ...provided,
    border: "1px solid #DADADA",
    boxShadow: "0 .25rem .625rem .1875rem rgba(0, 0, 0, 0.11)",
    borderRadius: ".375rem",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "26px 32px",
    backgroundColor: state.isSelected ? "#DCDCDC" : "#fff",
    color: state.isSelected ? "#343A40" : "#696F79",
    cursor: "pointer",
    ":hover": {
      color: "#696F79",
      backgroundColor: "#f3f3f3",
    },
  }),
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <CaretDownIcon />
  </components.DropdownIndicator>
);

const CustomSelect = ({ inputId, options, value, onChange }) => (
  <Select
    inputId={inputId}
    isSearchable={false}
    components={{ DropdownIndicator }}
    styles={customStyles}
    options={options}
    value={value}
    onChange={onChange}
  />
);

export default CustomSelect;
