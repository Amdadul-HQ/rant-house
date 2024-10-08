import React from 'react';

const FilterSection = () => {
    return (
        <div className='flex w-full h-full'>
            <select className='border h-full rounded-lg w-full outline-gray-400 px-3'>
                <option value="">Sort by</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="bedrooms">Bedrooms (Low to High)</option>
                <option value="bathrooms">Bathrooms (Low to High)</option>
                <option value="square-feet">Square Feet (Low to High)</option>
            </select>
        </div>
    );
};

export default FilterSection;