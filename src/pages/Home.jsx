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
                        <h2 className="hero-title">Bienvenido a Mi Sitio Web</h2>
                        <p className="hero-subtitle">Productos, servicios y soluciones pensadas para ti.</p>
                        <a className="cta-button" href="/productos">Explorar productos</a>
                    </div>
                </section>

                <section className="features">
                    <div className="feature-card">
                        <h3>Calidad</h3>
                        <p>Productos seleccionados y verificados.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Soporte</h3>
                        <p>Atención al cliente rápida y amable.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Envío rápido</h3>
                        <p>Entrega segura y a tiempo.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Home;