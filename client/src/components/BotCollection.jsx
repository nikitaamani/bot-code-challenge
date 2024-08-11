// BotCollection.jsx
import React from 'react';
import BotList from './BotList';
import SortBar from './SortBar';

function BotCollection({ bots, enlistBot, deleteBot, sortBy, onSortChange, enlistedBots }) {
  const [filter, setFilter] = React.useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prev) =>
      checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  const filteredBots = bots.filter((bot) => filter.length === 0 || filter.includes(bot.bot_class));
  const sortedBots = filteredBots.slice().sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <SortBar sortBy={sortBy} onSortChange={onSortChange} />
      <div className="flex flex-wrap gap-4 mb-4">
        {["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].map((cls) => (
          <label key={cls} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={cls}
              checked={filter.includes(cls)}
              onChange={handleFilterChange}
              className="form-checkbox"
            />
            <span>{cls}</span>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedBots.map((bot) => (
          <BotList
            key={bot.id}
            bot={bot}
            onClick={enlistBot}
            onDelete={deleteBot}
            isInArmy={enlistedBots.some((b) => b.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
