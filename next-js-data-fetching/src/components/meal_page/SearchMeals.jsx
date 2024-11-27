"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";


const SearchMeals = () => {
    const [searchedItem, setSearchedItem] = useState("");
    const [searchedItems, setSearchedItems] = useState([]);

    const handleSearchedItem = (e) => {
        setSearchedItem(e.target.value);
    };

    const handleSearch = async () => {
        if (!searchedItem.trim()) {
            return;
        }
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchedItem}`);
            setSearchedItems(res.data.meals || []);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="flex flex-col items-center p-5">
            <div className="border-2 border-amber-700 rounded">
                <input
                    type="text"
                    value={searchedItem}
                    onChange={handleSearchedItem}
                    placeholder="search..."
                    className="outline-none p-2"
                />
                <button onClick={handleSearch} className="outline-none p-2 bg-amber-500 text-amber-950">
                    Search
                </button>
            </div>
            <section className="grid grid-cols-5 gap-2 p-4 w-full">
                {searchedItems && searchedItems.length > 0 ? (
                    searchedItems.map((item) => (
                        <div key={item.idMeal} className="p-2 border-1 border-gray-500 rounded">
                            <Image src={item.strMealThumb} alt={item.idMeal} width={300} height={100}></Image>
                            <h2>{item.strMeal}</h2>
                            <h3>{item.strInstructions}</h3>
                        </div>
                    ))
                ) : (
                    <h1>No data found!!</h1>
                )}
            </section>
        </section>
    );
};

export default React.memo(SearchMeals);