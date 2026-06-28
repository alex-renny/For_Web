import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Eye, EyeOff } from "lucide-react";
import {
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
  Gem,
  Heart,
  Infinity,
  Music2,
  Pause,
  Play,
  Quote,
  Sparkles,
  Volume2,
} from 'lucide-react';
import './styles.css';

const asset = (name) => `/audios/${name}`;

const memories = [
  {
    title: 'Dawn',
    kicker: 'A trip to remember',
    date: 'February 26, 2025',
    image: 'us_1.png',
    song: 'song_1.mp3',
    note:
      'Our first trip together became the start of us. The first handhold, the first photo, the quiet smiles, and the feeling that something beautiful had begun.',
  },
  {
    title: 'Bloom',
    kicker: 'Chaos and closeness',
    date: 'Ethnic Day',
    image: 'us_8_png.jpg',
    song: 'song_2.mp3',
    note:
      'A small fight, a little compromise, food, photos, calls, and care. That day made the bond feel warmer and stronger.',
      featured: true,
  },
  {
    title: 'Gleam',
    kicker: 'All about you',
    date: 'March 29, 2025',
    image: 'us_11.png',
    song: 'song_3.mp3',
    note:
      'Your birthday was simple and sweet: flowers, a tiny Bible keychain, nervous hands, and a smile that made the whole day glow.',
  },
  {
    title: 'Wander',
    kicker: 'The beginning of us',
    date: 'April 11, 2025',
    image: 'us_5.png',
    song: 'song_4.mp3',
    note:
      'The proposal day. The moment love became real, spoken, and unforgettable. April 11, 2025 will always be the date our story turned into forever.',
    
  },
  {
    title: 'Lumen',
    kicker: 'Perfectly imperfect',
    date: 'Our everyday bond',
    image: 'us_12.png',
    song: 'song_5.mp3',
    note:
      'We laugh, share secrets, miss each other, argue sometimes, and still choose each other. That is the beauty of what we have.',
  },
  {
    title: 'Haven',
    kicker: 'A simple moment',
    date: 'A day near home',
    image: 'us_14.png',
    song: 'song_7.mp3',
    note:
      'The scooter ride, the church, the candle, the bus seat, your head on my shoulder, and the feeling of not wanting the day to end.',
  },
  {
    title: 'Ethereal',
    kicker: 'Dreamy connection',
    date: 'My love letter',
    image: 'us_16.png',
    song: 'us_10.mp3',
    note:
      'You are my comfort, my calm, my favorite thought, and the safest place my heart knows how to return to.',
  },
  {
    title: 'Serene',
    kicker: 'Forever us',
    date: 'Always',
    image: 'us_13.png',
    song: 'song_6.mp3',
    note:
      'I do not need perfect days. I just need us choosing each other with soft hearts, honest love, and hands that never let go.',
  },
];

const gallery = ['us_1.png', 'us_5.png', 'us_8_png.jpg', 'us_11.png', 'us_12.png', 'us_13.png', 'us_14.png', 'us_16.png','us_17.png','us_18.png','us_19.png','us_20.png','us_21.png','us_22.png','us_23.png','us_24.png','us_25.png','us_26.png',];

const promises = [
  'Soft patience',
  'Honest words',
  'Little prayers',
  'Loud laughter',
  'Always us',
];

const floatingPhotos = ['us_1.png', 'us_12.png', 'us_11.png', 'us_16.png'];

function daysSinceProposal() {
  const start = new Date('2025-04-11T00:00:00');
  const today = new Date();
  const diff = today.setHours(0, 0, 0, 0) - start.getTime();
  return Math.max(0, Math.floor(diff / 86400000));
}

// Add this state near your other useState declarations at the top of App component:

// Add this function to handle photo click:


// Add this function to handle photo download:


function App() {

  // Add this JavaScript to create floating hearts
const createHearts = () => {
    const overlay = document.querySelector('.popupOverlay');
    if (!overlay) return;

    const heartEmojis = ['❤️', '💕', '🦢', '💖', '💝', '💘', '🩷', '🦢', '🤍'];
    
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // Random properties
        const size = Math.random() * 20 + 15; // 15-35px
        const left = Math.random() * 100; // 0-100%
        const duration = Math.random() * 3 + 4; // 4-7 seconds
        const delay = Math.random() * 2; // 0-2 seconds
        
        heart.style.cssText = `
            left: ${left}%;
            font-size: ${size}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        overlay.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    };
    
    // Create hearts at intervals
    setInterval(createHeart, 300);
};

// Initialize hearts when popup is shown
const initializeHearts = () => {
    if (document.querySelector('.popupOverlay')) {
        createHearts();
    }
};

// Call this function when your popup appears
// You can add it to your showPopup logic or useEffect

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = showPopup ? "hidden" : "";

    let heartInterval;

    if (showPopup) {
        heartInterval = createHearts();
    }

    return () => {
        document.body.style.overflow = previousOverflow;

        if (heartInterval) {
            clearInterval(heartInterval);
        }
    };
}, [showPopup]);

  const PASSWORD = "april11🦢"; // password
const [showPassword, setShowPassword] = useState(false);
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const checkPassword = () => {
  if (password === PASSWORD) {
    setShowPopup(false);
    setError("");
  } else {
    setError("Password um maranoo kochuseee 😂");
  }
};

  const [active, setActive] = useState(3);
  const [playing, setPlaying] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const audioRef = useRef(null);
  const selected = memories[active];
  const proposalDays = useMemo(daysSinceProposal, []);

  const handleHeroMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const playMemory = async (index = active) => {
    setActive(index);
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = asset(memories[index].song);
    audio.currentTime = 0;
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const toggleAudio = async () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (playing) {
    audio.pause();
    setPlaying(false);
    return;
  }

  audio.src = "/audios/song_8.mp3"; // your audio file
  await audio.play();
  setPlaying(true);
};

  const shiftMemory = (direction) => {
    const next = (active + direction + memories.length) % memories.length;
    playMemory(next);
  };

  const openPhotoViewer = (photoSrc) => {
  setSelectedPhoto(photoSrc);
};
const downloadPhoto = async (photoSrc, photoName) => {
  try {
    const response = await fetch(photoSrc);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = photoName || 'memory.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    // Fallback: open in new tab if download fails
    window.open(photoSrc, '_blank');
  }
};

  return (
    <main>
      <audio ref={audioRef} loop onEnded={() => setPlaying(false)} />
                  {showPopup && (
            <div className="popupOverlay">
              <div className="popupBox">
                <h2>Happy Birthday Jaada Kari 🦢</h2>

                <p>
                  Welcome to our little Forever.
                </p>

                <div className="popupInstructions">
                  <p>Edii Jaada Kari penne Happy Birthday😚. First off all Enikk nine pole parayan ariyulla okee🫷 athod adjust cheyanam.Ente kochunu 20 vayass ayelleee valarnn poyi ente vavaa🥹.
                    Agne nii ente penn ayett eth kochute 2nd B'day.Ohh My God enikk enna parayadenu ariyula😅 enna pannuvee.....<br/>Nii choyecha pole enikk sothayett onum ondaki tharan ariyulla kochuuu enik nine pole craft il kaziv ella I'm weak in craft athod ente kochine enikk ariyavuna karyathil oru gift tharanu vechuu 😁.Pinalla njan oru sambavam thane 😎.
                    Ayenn munp kochuseee , edii penne Enikk kochune othiri othiri isttavaa ariyoo ninak 🤨 pakshee ath agane purathod varulla ennanoo avoo enik aa shneham egana kanikeede enn chilapoo ariyullaa athann vesheyam.Chilapoo ath ente moodoff avam chilapoo kochute reation um tone um karanam avan agane kuree prblms. Apooo nii parayam "ninak enne isttam alla enn"
                    Njan enna cheyana..😅.But do you know something arodum parayalum secret aa "I LOVE YOU". Ath anum enneum epoozum agane thane avum kettaloooo.Nii ellathe pattulaneee enna cheyan Nii 
                    ollapoo oru pretheka feel aa ath pakuthi time um namel adi ahnelum. Pakuthi alla 80% um adiyaa ennaum olla 20% ath mathi.Ente kochute chila time le cute face kanam enna resanu ariyoo dii penne 
                    ehhhhhhhh oru kochine pole olla aaa talk um aaa nadathavum ella oru kujine pole nalla rasavaaa That's make you special. 
                    Apoo oru kiss oke tharan thonum but enna cheyan ninak discomfort ayathodaaa🥹🥹🥹.Edakekilum oru ath oke tharam kettooo kochuveee...Orenam kittittu ethra ayi🥹<br />Pine kochuuve namude scrapbook ath njan onn modify cheythu kettodaa kochuuu But it's not complete
                    .Njan mathram cheythaa ath complete avulalooo.Without your presence it will be always remain incomplete.Athod eth just oru model allekil blueprint pole kuttiyaa mathi wokeyy Baki namukk onich complete cheyam ennale athin oru prefection kittu .
                    "Our little forever" ath finish cheyanokil niiyum veenam.. <br /><br />
                    Apooo namuk oru cheriya memeory lekk poyalooo kochunu eth isttapeduvoo enn enik ariyulla ennanelum abiprayam parayanee. Pine ethite pw kochute wp privacy pw ahne<br /><br />
                    Same pictures,Same songs,Same captions and words and same MEMORIES.I but the design is new... like you have grown from 19 to 20 😚
                  </p>
                </div>

                <div className="passwordWrapper">
                  <input
                      type={showPassword ? "text" : "password"}
                      className="popupInput"
                      placeholder="Enter the secret password ❤️"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="showPasswordBtn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
              </div>

                {error && <p className="popupError">{error}</p>}

                <button
                  className="popupButton"
                  onClick={checkPassword}
                >
                  Our Little Forever
                  <img
                    src="/audios/logo.png"
                    alt="Logo"
                    className="buttonLogo"
                  />
                </button>
              </div>
            </div>
          )}
           {!showPopup && (
              <>
        

      <section
        className="hero"
        aria-label="Our love story"
        onMouseMove={handleHeroMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ '--tilt-x': `${tilt.x}deg`, '--tilt-y': `${tilt.y}deg` }}
        >
        <div className="heroImage" />
        <div className="auroraLayer" aria-hidden="true" />
        <div className="heartParticles" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <nav className="topbar" aria-label="Main navigation">
          <a href="#memories">Memories</a>
          <a href="#proposal">Proposal</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <div className="heroContent">
          <p className="eyebrow"><Sparkles size={16} /> A private little universe</p>
          <h1>Our Little Forever</h1>
          <p className="heroCopy">
            A scrapbook for the soft moments, the silly fights, the firsts, and the love that started shining brighter on April 11, 2025.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#proposal">
              <CalendarHeart size={18} /> Proposal day
            </a>
            <button className="ghostButton" type="button" onClick={toggleAudio}>
              {playing ? <Pause size={18} /> : <Play size={18} />} {playing ? 'Pause music' : 'Play music'}
            </button>
          </div>
        </div>

          <div className="heroConstellation" aria-hidden="true">
            {floatingPhotos.map((photo, index) => (
              <figure className={`floatPhoto floatPhoto${index + 1}`} key={photo}>
                <img src={asset(photo)} alt="" />
              </figure>
            ))}
          </div>
      </section>

      <section className="proposalBand" id="proposal">
        <div>
          <p className="eyebrow"><Gem size={16} /> The date everything changed</p>
          <h2>April 11, 2025</h2>
          <p>
            That day was not just a confession. It was the moment two hearts chose the same direction, with nervous smiles, honest words, and a promise hidden inside every glance.
          </p>
          <div className="promiseRow" aria-label="Promises">
            {promises.map((promise) => (
              <span key={promise}>{promise}</span>
            ))}
          </div>
        </div>
        <div className="dateCard" aria-label={`${proposalDays} days since proposal`}>
          <Infinity size={34} />
          <span>{proposalDays}</span>
          <small>days of choosing us</small>
        </div>
      </section>

      <section className="memorySection" id="memories">
        <div className="sectionIntro">
          <p className="eyebrow"><Music2 size={16} /> Tap a chapter to change the song</p>
          <h2>Memory Chapters</h2>
        </div>

        <div className="memoryShowcase">
          <button className="roundButton" type="button" onClick={() => shiftMemory(-1)} aria-label="Previous memory">
            <ChevronLeft size={22} />
          </button>

          <article className="memoryPanel">
            <div className="memoryPhotoWrap">
              <img src={asset(selected.image)} alt={`${selected.title} memory`} />
              <div className="vinylDisc" aria-hidden="true">
                <span />
              </div>
            </div>
            <div className="memoryText">
              <span>{selected.date}</span>
              <h3>{selected.title}</h3>
              <p className="kickerText">{selected.kicker}</p>
              <p>{selected.note}</p>
              <div className="memoryControls">
                <button className="primaryButton compact" type="button" onClick={() => playMemory(active)}>
                  <Volume2 size={17} /> Play this chapter
                </button>
                <span className="nowPlaying">{playing ? 'Music is glowing' : 'Ready to play'}</span>
              </div>
            </div>
          </article>

          <button className="roundButton" type="button" onClick={() => shiftMemory(1)} aria-label="Next memory">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="chapterRail" aria-label="Memory chapter list">
          {memories.map((memory, index) => (
            <button
              className={index === active ? 'chapter activeChapter' : 'chapter'}
              type="button"
              key={memory.title}
              onClick={() => playMemory(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {memory.title}
            </button>
          ))}
        </div>
      </section>

      <section className="letterSection">
        <div className="letter">
          <p className="eyebrow"><Quote size={16} /> For Chekkoo</p>
          <h2>You make ordinary days feel rare.</h2>
          <p>
            Love is the comfort of your voice, the sparkle in your eyes, and the peace I find when I am with you. Even silence feels meaningful when it is shared with you.
          </p>
          <p>
            I love how we keep coming back to each other with more care, more patience, and more reasons to believe in us.
          </p>
        </div>
        <img src={asset('us_14.png')} alt="A soft black and white memory together" />
      </section>


      <section className="gallerySection" id="gallery">
        <div className="sectionIntro">
          <p className="eyebrow"><Sparkles size={16} /> Photo wall</p>
          <h2>Our Favorite Frames</h2>
        </div>
        <div className="galleryGrid">
          {gallery.map((photo, index) => (
            <figure key={photo} className={`galleryItem item${index + 1}`}>
              <img 
                src={asset(photo)} 
                alt={`Couple memory ${index + 1}`}
                onClick={() => openPhotoViewer(asset(photo))}
                style={{ cursor: 'pointer' }}
              />
              <div className="galleryItemOverlay">
                <button 
                  className="viewButton"
                  onClick={() => openPhotoViewer(asset(photo))}
                  aria-label="View photo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                <button 
                  className="downloadButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadPhoto(asset(photo), `memory_${index + 1}.jpg`);
                  }}
                  aria-label="Download photo"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            </figure>
          ))}
        </div>
        <div className="galleryActions">
          <button 
            className="ghostButton galleryToggle" 
            type="button"
            onClick={() => {
              const grid = document.querySelector('.galleryGrid');
              grid.classList.toggle('showAll');
              const btn = document.querySelector('.galleryToggle');
              if (grid.classList.contains('showAll')) {
                btn.textContent = 'See Less ✨';
              } else {
                btn.textContent = 'See More 💕';
              }
            }}
          >
            See More 💕
          </button>
        </div>
      </section>

      {/* Photo Viewer Modal */}
      {selectedPhoto && (
        <div className="photoViewerOverlay" onClick={() => setSelectedPhoto(null)}>
          <div className="photoViewerContent" onClick={(e) => e.stopPropagation()}>
            <div className="photoViewerHeader">
              <button 
                className="photoViewerDownload"
                onClick={() => downloadPhoto(selectedPhoto, 'memory_download.jpg')}
                aria-label="Download photo"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download</span>
              </button>
              <button 
                className="photoViewerClose"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close viewer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <img 
              src={selectedPhoto} 
              alt="Memory" 
              className="photoViewerImage"
            />
          </div>
        </div>
      )}


      <footer>
        <Heart size={18} />
        <span>Always yours. April 11, 2025 and every day after.</span>
      </footer>
      </>
    )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
