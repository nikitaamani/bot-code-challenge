// YourBotArmy.jsx
import React from 'react';
import BotList from './BotList';

function YourBotArmy({ bots, onRelease, onDelete }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 mb-6">
      <h2 className="text-2xl font-bold mb-4">Your Bot Army</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bots.map((bot) => (
          <BotList
            key={bot.id}
            bot={bot}
            onRelease={onRelease}
            onDelete={onDelete}
            isInArmy={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
