import React, { useState } from "react";
import Select from "react-select";
import countries from "world-countries";

const countryOptions = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log("País seleccionado:", selectedOption);

    // Emitir evento para Astro con el país seleccionado
    window.dispatchEvent(new CustomEvent("countrySelected", { detail: selectedOption.label }));
  };

  return (
    <div className="flex flex-col w-[49%]">
      <Select
        id="country"
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-full text-black"
        placeholder="Country"
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderRadius: "8px",
            borderColor: state.isFocused ? "yellow" : "#4b5563",
            boxShadow: "none",
            padding: "2px",
            backgroundColor: "#0F1911",
            boxShadow: state.isFocused ? "0 0 0 0.5px yellow" : "none",
            "&:hover": {
              borderColor: state.isFocused ? "yellow" : "#4b5563",
            },
          }),
          input: (provided) => ({
            ...provided,
            color: "white",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "white",
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 10,
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
        }}
      />
    </div>
  );
};

export default CountrySelect;
