import { useEffect, useState } from 'react';
import './App.css';
import img1 from './assets/1-krk.png';
import img2 from './assets/2-ramena.png';
import img3 from './assets/3-ramena-zada.png';
import img4 from './assets/4-predlokti-zapesti.png';
import img5 from './assets/5-zada-boky.png';
import img6 from './assets/6-zada.png';
import img7 from './assets/7-kvadriceps.png';
import img8 from './assets/8-hamstring.png';

const images = [
  { src: img1, label: 'Krk' },
  { src: img2, label: 'Ramena' },
  { src: img3, label: 'Ramena a záda' },
  { src: img4, label: 'Předloktí a zápěstí' },
  { src: img5, label: 'Záda a boky' },
  { src: img6, label: 'Záda' },
  { src: img7, label: 'Kvadriceps' },
  { src: img8, label: 'Hamstring' },
];

function App() {
  const [index, setIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          setIndex((i) => (i + 1) % images.length);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="timer">{secondsLeft}</div>
      <img className="exercise-image" src={images[index].src} alt={images[index].label} />
      <div className="label">{images[index].label}</div>
    </div>
  );
}

export default App;
