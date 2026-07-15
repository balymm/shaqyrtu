import { useRef, useState } from "react";
import { EVENT } from "./eventConfig.js";
import WelcomeOverlay from "./components/WelcomeOverlay.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import Hero from "./components/Hero.jsx";
import InvitationText from "./components/InvitationText.jsx";
import EventCalendar from "./components/EventCalendar.jsx";
import LocationTime from "./components/LocationTime.jsx";
import RSVPForm from "./components/RSVPForm.jsx";
import Countdown from "./components/Countdown.jsx";

export default function App() {
  const audioRef = useRef(null);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Первый клик пользователя (по кнопке «Шақыруды ашу») — это то самое
  // "user gesture", которое разрешает браузерам (включая Safari iOS) запустить аудио.
  function handleOpen() {
    setOverlayVisible(false);
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <audio ref={audioRef} src={EVENT.musicSrc} loop preload="none" />

      <WelcomeOverlay visible={overlayVisible} onOpen={handleOpen} />
      <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

      <main>
        <Hero />
        <InvitationText />
        <EventCalendar />
        <LocationTime />
        <RSVPForm />
        <Countdown />
      </main>

      <footer className="text-center py-8 font-body text-[0.65rem] tracking-widest uppercase text-ink/40">
        {EVENT.monthLabel} {EVENT.eventDay}, {EVENT.monthYear}
      </footer>
    </div>
  );
}
