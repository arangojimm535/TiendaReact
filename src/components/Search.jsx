import React from "react";

function Search() {
  return (
      <div className="relative">
        <form>
          <input
            type="text"
            placeholder="Busca tu producto"
            className="pl-3 sm:w-50 md:w-80 py-1 border rounded-full focus:outline-none focus:border-red-100 focus:ring-1 focus:ring-red-100"
          />
          <div className="absolute sm:left-36 md:left-72 -top-0 py-0.5 ">
            <button type="submit" className="bg-red-200 rounded-full px-6 py-1">
              Buscar
            </button>
          </div>
        </form>
      </div>
  );
}

export default Search;
