// BotList.jsx
import React from 'react';

function BotList({ bot, onClick, onDelete, onRelease, isInArmy }) {
  return (
    <div
      className="shadow-lg rounded-lg overflow-hidden bg-white flex flex-col p-4 m-2 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
      onClick={() => onClick(bot)}
    >
      <div className="flex-shrink-0">
        <img
          src={bot.avatar_url}
          alt={bot.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      <div className="flex-1 p-4 flex flex-col justify-between">
        <h4 className="font-bold text-xl mb-2">{bot.name}</h4>
        <p className="text-md mb-1">
          <span className="font-semibold">Health:</span> {bot.health}
        </p>
        <p className="text-md mb-1">
          <span className="font-semibold">Damage:</span> {bot.damage}
        </p>
        <p className="text-md mb-1">
          <span className="font-semibold">Armor:</span> {bot.armor}
        </p>
        <p className="text-md mb-3">
          <span className="font-semibold">Catchphrase:</span> <small>{bot.catchphrase}</small>
        </p>

        <div className="flex space-x-2">
          {isInArmy ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              onClick={(event) => {
                event.stopPropagation();
                onRelease(bot);
              }}
            >
              Remove
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              onClick={(event) => {
                event.stopPropagation();
                onClick(bot);
              }}
            >
              Enlist
            </button>
          )}

          {onDelete && !isInArmy && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              onClick={(event) => {
                event.stopPropagation();
                onDelete(bot);
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BotList;
