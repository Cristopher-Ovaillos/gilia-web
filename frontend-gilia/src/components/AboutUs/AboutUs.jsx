import "./AboutUs.css";
import { useTheme } from "../../context/ThemeContext";

const quienesSomos = {
    descripcion:
        "GILIA: Grupo de Investigación en Lenguajes e Inteligencia Artificial. Resolución Consejo Directivo FAIF N° 052/10.",
    directores: [
        { nombre: "Dra. Laura Cecchi", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg', linkedin: "https://www.linkedin.com" },
        { nombre: "Lic. Sandra Roger", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg', linkedin: "https://www.linkedin.com" },
    ],
    docentesInvestigadores: [
        { nombre: "Mg. Gerardo Parra", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Mg. Claudio Vaucheret", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Ing. Rodolfo Del Castillo", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Lic. Daniel Dolz", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Lic. Pablo Kogan", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Lic. Mario Moya", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Lic. Maximiliano Klemen", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Lic. María Laura Pino", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "Lic. Guillermo Torres", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' }
    ],
    becarios: [{ nombre: "Lic. Germán Braun", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' }],
    integrantes: [
        { nombre: "Lic. Daniel Trevisani", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "AC. Jael Yañez", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "AC. Patricio Biondelli", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "AC. Diego Giuliani", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "AC. Andrea Vicente", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' },
        { nombre: "AC. Fernando Buccella", avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg' }
    ],
    proyectos: [
        {
            codigo: "04/F006",
            titulo: "Agentes inteligentes en ambientes dinámicos",
            periodo: "2013-2016",
            descripcion:
                "Este proyecto explora el uso de agentes inteligentes en entornos de rápida evolución y cómo se adaptan a estos cambios.",
            enlace: "https://www.fi.uncoma.edu.ar/index.php/proyectos-terminados/411-proyf006/",
        },
    ],
};

const AboutUs = () => {
    const { theme } = useTheme(); // Obtener el tema

    return (
        <div className="custom-about-us p-6 max-w-4xl mx-auto" style={{ backgroundColor: theme.token.backgroundColor }}>
            {/* Descripción */}
            <h2 className="text-3xl font-bold text-center mb-6" style={{ color: theme.token.colorTextBase }}>¿Quiénes Somos?</h2>
            <p className="text-center mb-8" style={{ color: theme.token.colorTextBase }}>{quienesSomos.descripcion}</p>

            {/* Directores */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.token.colorTextBase }}>Directores</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quienesSomos.directores.map((director, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 p-4 rounded-lg shadow ${theme.token.backgroundColor === '#141414' ? 'bg-gray-700' : 'bg-gray-100'}`}
                        >
                            <img
                                src={director.avatar}
                                alt={director.nombre}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium" style={{ color: theme.token.colorTextBase }}>{director.nombre}</p>
                                <a href={director.linkedin} target="_blank" className="text-blue-600 text-sm">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Docentes Investigadores */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.token.colorTextBase }}>Docentes Investigadores</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quienesSomos.docentesInvestigadores.map((docente, index) => (
                        <div
                            key={index}
                            className={`text-center p-4 rounded-lg shadow ${theme.token.backgroundColor === '#141414' ? 'bg-gray-700' : 'bg-gray-100'}`}
                        >
                            <img src={docente.avatar} alt={docente.nombre} className="w-16 h-16 mx-auto rounded-full object-cover" />
                            <p className="mt-2" style={{ color: theme.token.colorTextBase }}>{docente.nombre}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Becarios */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.token.colorTextBase }}>Becarios</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quienesSomos.becarios.map((becarios, index) => (
                        <div
                            key={index}
                            className={`text-center p-4 rounded-lg shadow ${theme.token.backgroundColor === '#141414' ? 'bg-gray-700' : 'bg-gray-100'}`}
                        >
                            <img src={becarios.avatar} alt={becarios.nombre} className="w-16 h-16 mx-auto rounded-full object-cover" />
                            <p className="mt-2" style={{ color: theme.token.colorTextBase }}>{becarios.nombre}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Proyectos */}
            <section>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.token.colorTextBase }}>Proyectos</h3>
                <div className="space-y-4">
                    {quienesSomos.proyectos.map((proyecto, index) => (
                        <div key={index} className="border-l-4 border-blue-600 p-4 shadow rounded-lg"
                            style={{
                                backgroundColor: theme.token.backgroundColor === '#141414' ? '#2a2a2a' : '#f9f9f9',
                                color: theme.token.colorTextBase
                            }}>
                            <h4 className="text-lg font-bold">{proyecto.titulo}</h4>
                            <p className="text-sm">{proyecto.periodo}</p>
                            <p className="text-gray-700">{proyecto.descripcion}</p>
                            <a href={proyecto.enlace} target="_blank" className="text-blue-600 text-sm">
                                Más información
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
