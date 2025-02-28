const lineasInvestigacion = [
    {
        nombre: "Ontologías y Web Semántica",
        autor: "Autor 1",
        contenido: "La investigación en Ontologías y Web Semántica se concentra en cómo organizar y representar el conocimiento de manera que las máquinas puedan procesarlo y comprenderlo de forma más eficaz. Las ontologías son estructuras que permiten representar un conjunto de conceptos y sus relaciones dentro de un dominio específico, y están diseñadas para facilitar la interoperabilidad entre diferentes sistemas informáticos. La Web Semántica, desarrollada por Tim Berners-Lee, pretende hacer que la información en la web sea comprensible para las máquinas mediante el uso de estándares como RDF (Resource Description Framework), OWL (Web Ontology Language) y SPARQL. Esta investigación también explora cómo mejorar la búsqueda de información en la web, permitir la integración de datos de diversas fuentes y facilitar la creación de aplicaciones más inteligentes que entiendan el significado detrás de los datos, no solo los datos en sí. En este contexto, se estudian también las tecnologías emergentes en la inteligencia artificial y cómo las ontologías pueden potenciar el aprendizaje automático y la minería de datos.",
        img: "/imagenRandom.png"
    },
    {
        nombre: "Procesamiento del Lenguaje Natural",
        autor: "Autor 2",
        contenido: "El Procesamiento del Lenguaje Natural (PLN) es una disciplina dentro de la inteligencia artificial que se dedica a la interacción entre las computadoras y el lenguaje humano. Su principal objetivo es permitir que las máquinas entiendan, procesen y generen texto o habla de manera natural, similar a como lo haría un ser humano. Las aplicaciones del PLN son vastas e incluyen traducción automática, análisis de sentimientos, sistemas de recomendación, asistentes virtuales, chatbots, y mucho más. En la investigación se abordan problemas complejos como la ambigüedad lingüística, la detección de sarcasmo, el reconocimiento de entidades nombradas (por ejemplo, nombres de personas y lugares), y la creación de modelos que puedan generar respuestas coherentes y contextualmente relevantes. Además, se exploran las técnicas más avanzadas como el análisis de texto a gran escala mediante aprendizaje profundo, especialmente utilizando redes neuronales recurrentes (RNN) y transformadores, que permiten a los sistemas comprender el contexto de las oraciones de manera más efectiva. La investigación también examina el procesamiento de lenguas menos representadas o de bajo recurso, creando soluciones inclusivas que puedan ser utilizadas por hablantes de todos los idiomas."
        ,
        img: "/imagenRandom.png"
    },
    {
        nombre: "Robótica y Sistemas Embebidos",
        autor: "Autor 3",
        contenido: "La investigación en Robótica y Sistemas Embebidos se concentra en el diseño, desarrollo y control de robots autónomos y sistemas embebidos, que son dispositivos computacionales diseñados para realizar tareas específicas dentro de sistemas más grandes. En robótica, se investiga sobre la creación de robots que puedan realizar tareas complejas, como manipulación de objetos, navegación autónoma en entornos no estructurados y colaboración entre robots y humanos en entornos dinámicos. Los robots inteligentes utilizan sensores, algoritmos de percepción y técnicas de aprendizaje automático para adaptarse a su entorno y mejorar su desempeño. Los sistemas embebidos, por otro lado, están presentes en una amplia variedad de aplicaciones, desde vehículos autónomos hasta dispositivos médicos y sistemas de control industrial. Los avances en estos campos están transformando industrias enteras, permitiendo la creación de productos más eficientes, seguros y precisos. Los sistemas embebidos inteligentes, que incluyen hardware y software especializados, están revolucionando áreas como la Internet de las Cosas (IoT), la automoción, la robótica industrial, y la atención sanitaria, entre otros. Los desafíos de esta investigación incluyen la mejora de la eficiencia energética, la reducción de costos, y la creación de interfaces intuitivas para la interacción humano-máquina."
        ,
        img: "/imagenRandom.png"
    },
    {
        nombre: "Sistemas Inteligentes",
        autor: "Autor 4",
        contenido: "Los Sistemas Inteligentes son aquellos que integran técnicas de inteligencia artificial para simular comportamientos inteligentes que resuelvan problemas complejos de manera autónoma. Estos sistemas son capaces de adaptarse a cambios en su entorno, tomar decisiones basadas en datos, aprender de su experiencia y mejorar su rendimiento con el tiempo. La investigación en este campo incluye áreas como el aprendizaje automático, el reconocimiento de patrones, la toma de decisiones autónoma, la optimización y los algoritmos evolutivos. Los sistemas inteligentes son aplicados en una amplia variedad de campos, tales como la medicina, la robótica, los vehículos autónomos, las finanzas, y la recomendación de productos. Un área particularmente prometedora es la inteligencia artificial explicativa, que busca que los sistemas inteligentes no solo tomen decisiones, sino que también puedan explicar el proceso detrás de sus elecciones de manera comprensible para los humanos. Además, los avances en la combinación de múltiples modelos de inteligencia artificial, como los sistemas híbridos, están llevando la creación de sistemas más robustos, escalables y éticos."

        ,
        img: "/imagenRandom.png"
    },
    {
        nombre: "Educación en las Ciencias de la Computación",
        autor: "Autor 5",
        contenido: "Esta línea de investigación se enfoca en la mejora de la enseñanza y el aprendizaje de las ciencias de la computación, un campo en constante evolución. A medida que la tecnología avanza, los métodos pedagógicos deben adaptarse para preparar a los estudiantes para enfrentar los desafíos del futuro. Los investigadores exploran cómo usar nuevas herramientas tecnológicas, como simuladores, plataformas de aprendizaje en línea, y software educativo, para hacer que conceptos como algoritmos, estructuras de datos y programación sean más accesibles y comprensibles. Además, se investigan enfoques innovadores, como el aprendizaje basado en proyectos, el uso de la gamificación, y el desarrollo de plataformas personalizadas que se adaptan a las necesidades individuales de los estudiantes. Esta área también se ocupa de cómo integrar disciplinas interrelacionadas como la inteligencia artificial y la robótica en los programas educativos, con el objetivo de ofrecer una educación más inclusiva, equitativa y eficiente, que prepare a los estudiantes para carreras tecnológicas de alta demanda."
        ,
        img: "/imagenRandom.png"
    },
    {
        nombre: "Lenguajes de Programación",
        autor: "Autor 6",
        contenido: "El estudio de los lenguajes de programación abarca tanto el diseño de nuevos lenguajes como la mejora de los existentes. Este campo se ocupa de crear lenguajes que sean más expresivos, eficientes y adecuados para tareas específicas. La investigación en lenguajes de programación también abarca la optimización de los compiladores, la implementación de nuevas construcciones del lenguaje que faciliten la programación paralela y distribuida, y la exploración de nuevos paradigmas de programación, como la programación funcional, lógica y reactiva. Los lenguajes de programación juegan un papel crucial en la forma en que los desarrolladores interactúan con las máquinas, y su evolución ha sido clave en el avance de la tecnología. Además, se exploran técnicas de análisis de código y optimización automática que permiten que los programas sean más rápidos, seguros y fáciles de mantener. También se presta atención a la accesibilidad y facilidad de uso, con investigaciones centradas en lenguajes que puedan ser utilizados tanto por principiantes como por expertos en desarrollo de software."
        ,
        img: "/imagenRandom.png"
    },
    {
        nombre: "Ética en Ciencias de la Computación",
        autor: "Autor 7",
        contenido: "La ética en las ciencias de la computación se ocupa de los dilemas morales y sociales que surgen a medida que la tecnología avanza y se convierte en una parte integral de la vida cotidiana. Este campo explora las implicaciones éticas del desarrollo de nuevas tecnologías, como la inteligencia artificial, la automatización y la privacidad de los datos. Los investigadores en ética en la computación analizan temas como el sesgo en los algoritmos, la transparencia en los sistemas automáticos, la responsabilidad en el uso de datos personales, y las posibles consecuencias sociales de la implementación de tecnologías disruptivas. Además, se investigan las normas éticas que deben seguir los desarrolladores y las empresas tecnológicas para garantizar que sus productos y servicios sean justos, inclusivos y respetuosos de los derechos humanos. La ética en las ciencias de la computación también examina el impacto de la inteligencia artificial en el empleo y la sociedad, la regulación de las tecnologías emergentes, y el papel que deben desempeñar los gobiernos y las organizaciones internacionales en la creación de un marco ético global para la tecnología."
        ,
        img: "/imagenRandom.png"
    }
];



const asyncMock = {
    getAll: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(lineasInvestigacion), 1000);
        });
    },
    getOne: async (nombre) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const linea = lineasInvestigacion.find(l => l.nombre === nombre);
                linea ? resolve(linea) : reject(new Error("Línea de investigación no encontrada"));
            }, 1000);
        });
    }
};
export default asyncMock;


asyncMock.getAll().then(console.log); // Obtiene todas las líneas
asyncMock.getOne("Sistemas Inteligentes").then(console.log).catch(console.error);

/*
    Como llamarlo desde otro archivo:

    asyncMock.getAll()
    .then(data => console.log("Todas las líneas:", data))
    .catch(error => console.error("Error:", error));

    asyncMock.getOne("Sistemas Inteligentes")
    .then(data => console.log("Línea encontrada:", data))
    .catch(error => console.error("Error:", error));

*/