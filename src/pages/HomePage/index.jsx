import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const handleJourneyChange = ({ journey }) => {
    return console.log(journey);
  };
  return (
    <main>
      <JourneyPicker />
    </main>
  );
};
