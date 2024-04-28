import React from 'react';
import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = ({ journeyData }) => {
    setJourney(journeyData);
  };
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null && <p>Nalezeno spojení s ID {journey.journeyId}.</p>}
    </main>
  );
};
