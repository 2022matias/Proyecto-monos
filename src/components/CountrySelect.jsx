import React, { useState } from 'react';
import Select from 'react-select';
import countries from 'world-countries';

const countryOptions = countries.map((country) => ({
    value: country.cca2, // Código del país
    label: country.name.common, // Nombre del país
}));

const CountrySelect = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        console.log('País seleccionado:', selectedOption);
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
                    control: (provided) => ({
                        ...provided,
                        borderRadius: '8px',
                        borderColor: 'gray',
                        boxShadow: 'none',
                        padding: '2px',
                    }),
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 10,
                    }),
                }}
            />
        </div>
    );
};

export default CountrySelect;
