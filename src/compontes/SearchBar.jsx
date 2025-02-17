import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Agar location 'collection' bo'lsa va search paneli ko'rsatilsa
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]); // location va showSearch o'zgarganda qayta ishlov beriladi

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-4 relative">
      <div className="flex items-center justify-center border border-gray-300 rounded-full px-4 w-full sm:w-4/5 md:w-2/3 mx-auto transition-all duration-300 ease-in-out transform hover:scale-105">
        {/* Qidirish ikonasini inputdan oldin joylash */}
        <img className="w-5 mr-2" src={assets.search_icon} alt="search icon" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm text-gray-700 placeholder-gray-400 rounded-full py-2 px-3"
          type="text"
          placeholder="Search"
        />
        {/* Yopish ikonasi */}
        <img
          onClick={() => setShowSearch(false)}
          className="w-6 cursor-pointer ml-2"
          src={assets.cross_icon}
          alt="close icon"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
