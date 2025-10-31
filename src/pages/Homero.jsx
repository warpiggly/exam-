import "./Homero.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

// Importar helpers
import { initializeAnimations, getRandomPhrase } from "../src/helpers/Homero";
import { useEffect, useState, useRef } from "react";

// Importar GIFs
import relojGif from "../assets/IMG/GIF/reloj.gif";
import gusanoGif from "../assets/IMG/GIF/gusano.gif";
import tostadoraGif from "../assets/IMG/GIF/tostadora.gif";
import jesusGif from "../assets/IMG/GIF/jesus.gif";
import campanaGif from "../assets/IMG/GIF/campana.gif";
import bocaGif from "../assets/IMG/GIF/boca.gif";
import backsound from "../assets/SONG/backsound.mp3";

function Homero() {
    const [phrase, setPhrase] = useState("");
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Inicializar animaciones cuando el componente se monte
        initializeAnimations();
        // Establecer una frase aleatoria
        setPhrase(getRandomPhrase());

        // Cambiar la frase cada 5 segundos
        const intervalId = setInterval(() => {
            setPhrase(getRandomPhrase());
        }, 5000);

        // Intentar reproducir el audio de fondo al montar
        if (audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch(() => {
                        // Autoplay fue bloqueado; el usuario deberá activar el sonido manualmente
                        setIsPlaying(false);
                    });
            }
        }

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="page2">
            <Header />
            <main className="main-content2">
                <h1 className="page_homer">Sitio Web de Homero</h1>
                <p className="homer-phrase">{phrase}</p>
                <div className="container">
                    <div className="relojGusano">
                        <img className="relojGusano_reloj" src={relojGif} alt="reloj" />
                        <img className="relojGusano_gusano" src={gusanoGif} alt="gusano" />
                    </div>
                    <div className="tostadora1">
                        <img src={tostadoraGif} alt="tostadora" />
                    </div>
                    <div className="jesus">
                        <img src={jesusGif} alt="jesus" />
                    </div>
                    <div className="tostadoraCampana">
                        <img className="tostadoraCampana_tostadora" src={tostadoraGif} alt="tostadora" />
                        <img className="tostadoraCampana_campana" src={campanaGif} alt="campana" />
                    </div>
                    <div className="boca">
                        <img src={bocaGif} alt="boca" />
                    </div>
                    <div className="reloj">
                        <img src={relojGif} alt="reloj" />
                    </div>
                    <div className="gusano1">
                        <img src={gusanoGif} alt="gusano" />
                    </div>
                    <div className="gusano2">
                        <img src={gusanoGif} alt="gusano" />
                    </div>
                    <div className="gusano3">
                        <img src={gusanoGif} alt="gusano" />
                    </div>
                    <div className="tostadora2">
                        <img src={tostadoraGif} alt="tostadora" />
                    </div>
                    <div className="campana">
                        <img src={campanaGif} alt="campana" />
                    </div>
                    <div className="boca2">
                        <img src={bocaGif} alt="boca" />
                    </div>
                    <div className="tostadora3">
                        <img src={tostadoraGif} alt="tostadora" />
                    </div>
                    <div className="reloj2">
                        <img src={relojGif} alt="reloj" />
                    </div>
                </div>
            </main>
            {/* audio element (hidden) */}
            <audio ref={audioRef} src={backsound} loop preload="auto" />

            {/* small control if autoplay is blocked or user wants to toggle */}
            <button
                className="audio-toggle"
                aria-pressed={isPlaying}
                onClick={() => {
                    if (!audioRef.current) return;
                    if (isPlaying) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                    } else {
                        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
                    }
                }}
                title={isPlaying ? 'Pausar música' : 'Reproducir música'}
            >
                {isPlaying ? '🔊' : '🔈'}
            </button>

            {/* <Footer /> */}
        </div>
    );
}

export default Homero;