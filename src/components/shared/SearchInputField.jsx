import { IoSearchOutline } from "react-icons/io5";
const SearchInputField = () => {
    return (
        <div className="flex items-center border px-4 py-2 rounded-md h-full">
            <input id="search" className="outline-none flex-1 h-full" type="search" placeholder="Search" name="search" />
            <label htmlFor="search"><IoSearchOutline className="flex-1 text-2xl"/></label>
        </div>
    );
};

export default SearchInputField;