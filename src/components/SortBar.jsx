// SortBar.jsx
import React from 'react';

function SortBar({ sortBy, onSortChange }) {
  return (
    <div className="p-4 flex justify-center space-x-4">
      <button
        className={`py-2 px-4 rounded-md ${sortBy === 'health' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onSortChange('health')}
      >
        Sort by Health
      </button>
      <button
        className={`py-2 px-4 rounded-md ${sortBy === 'damage' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onSortChange('damage')}
      >
        Sort by Damage
      </button>
      <button
        className={`py-2 px-4 rounded-md ${sortBy === 'armor' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onSortChange('armor')}
      >
        Sort by Armor
      </button>
    </div>
  );
}

export default SortBar;
