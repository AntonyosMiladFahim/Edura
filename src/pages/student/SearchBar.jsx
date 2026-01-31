    import React, { useState } from "react";
    // import { useNavigate } from "react-router-dom";

    const SearchBar = ({ data }) => {
    // const navigate = useNavigate();
    const [input, setInput] = useState(data || "");

    const onSearchHandler = (e) => {
        e.preventDefault();
        // navigate("/course-list/" + input);
    };

    return (
        <form
        onSubmit={onSearchHandler}
        className="
            flex items-center
            bg-black/40 backdrop-blur-md
            border border-white/10
            rounded-full
            shadow-xl
            overflow-hidden
            focus-within:border-indigo-500/60
            transition
        "
        >
        {/* Input */}
        <input
            type="text"
            placeholder="Search for courses..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="
            flex-1
            bg-transparent
            px-6 py-4
            text-white
            placeholder-gray-400
            outline-none
            text-sm md:text-base
            "
        />

        {/* Button */}
        <button
            type="submit"
            className="
            px-6 py-4
            bg-linear-to-r from-indigo-500 to-purple-500
            text-white
            font-semibold
            text-sm md:text-base
            hover:opacity-90
            transition
            "
        >
            Search
        </button>
        </form>
    );
    };

    export default SearchBar;
