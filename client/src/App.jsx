// App.jsx
import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [view, setView] = useState('collection');
  const [sortBy, setSortBy] = useState('health');

  useEffect(() => {
    fetch('http://localhost:3000/bots', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (!bot.army && !bots.some(b => b.bot_class === bot.bot_class && b.army)) {
      setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
      toast.success(`Enlisted ${bot.name} to your army!`);
    } else if (bot.army) {
      releaseBot(bot);
    } else {
      toast.error('You can only enlist one bot of each class.');
    }
  }

  function releaseBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
    toast.success(`Released ${bot.name} from your army.`);
  }

  function deleteBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          setBots(bots.filter((b) => b.id !== bot.id));
          toast.success(`Deleted ${bot.name} permanently.`);
        } else {
          toast.error('Failed to delete bot.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Error occurred while deleting bot.');
      });
  }

  function handleBotSelect(bot) {
    setSelectedBot(bot);
    setView('specs');
  }

  function handleBack() {
    setSelectedBot(null);
    setView('collection');
  }

  return (
    <div className="flex flex-col items-center">
      <Toaster />
      <YourBotArmy
        bots={bots.filter((b) => b.army)}
        onRelease={releaseBot}
        onDelete={deleteBot}
      />
      <div className="my-4 w-full max-w-6xl px-4">
        {view === 'collection' && (
          <BotCollection
            bots={bots}
            enlistBot={enlistBot}
            deleteBot={deleteBot}
            onBotSelect={handleBotSelect}
            sortBy={sortBy}
            onSortChange={setSortBy}
            enlistedBots={bots.filter((b) => b.army)}
          />
        )}
        {view === 'specs' && selectedBot && (
          <BotSpecs
            bot={selectedBot}
            onBack={handleBack}
            onEnlist={enlistBot}
          />
        )}
      </div>
    </div>
  );
}

export default App;
