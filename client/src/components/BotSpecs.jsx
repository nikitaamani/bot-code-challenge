// BotSpecs.jsx
import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="p-4">
      <div className="shadow-lg rounded-lg overflow-hidden bg-white max-w-md mx-auto">
        <img
          src={bot.avatar_url}
          alt={bot.name}
          className="w-full h-60 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h4 className="font-bold text-2xl mb-2">{bot.name}</h4>
          <p className="text-lg mb-1">
            <span className="font-semibold">Health:</span> {bot.health}
          </p>
          <p className="text-lg mb-1">
            <span className="font-semibold">Damage:</span> {bot.damage}
          </p>
          <p className="text-lg mb-1">
            <span className="font-semibold">Armor:</span> {bot.armor}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold">Catchphrase:</span> <small>{bot.catchphrase}</small>
          </p>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={onBack}
            >
              Back to List
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              onClick={() => onEnlist(bot)}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
