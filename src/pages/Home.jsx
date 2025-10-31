import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="page">
            <Header />

            <main className="main-content">
                <section className="hero">
                    <div className="hero-container">
                        <h2 className="hero-title">Bienvenido a Nuestra Plataforma</h2>
                        <p className="hero-subtitle">Un espacio diseñado para simplificar tus tareas y potenciar tu productividad. Empieza en segundos</p>
                        <a className="cta-button" href="/productos">Comienza Ahora</a>
                    </div>
                </section>

                <section className="features">
                    <div className="feature-card">
                        <h3>Gestion Centralizada</h3>
                        <p>Accede y administra todas tus herramientas y datos desde un unico panel de control.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Flujos de Trabajo Agiles</h3>
                        <p>Optimiza tus procesos y colabora con tu equipo en tiempo real para una mayor productividad.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Seguridad Confiable</h3>
                        <p>Mantenemos tu informacion segura con protocolos de encriptacion y proteccion de ultima generacion.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Home;