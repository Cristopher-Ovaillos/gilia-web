import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Loader from "../Loader/Loader";

const AboutUs = () => {
  const { theme } = useTheme();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/api/about-uses?populate=*");
      const data = await response.json();
      console.log("Datos recibidos:", data); 
      setData(data.data[0]);
    };

    fetchData();
  }, []);

  if (!data) {
    return <Loader/>;
  }

  const ordenarPorRol = (people) => {
    const roleOrder = ["Director", "Investigador", "Colaborador", "Becario"];
    return people.sort((a, b) => {
      return roleOrder.indexOf(a.role_person) - roleOrder.indexOf(b.role_person);
    });
  };

  const sortedPeople = ordenarPorRol(data.people);

  //para ver la url de la imagen del equipo
  console.log(`Imagen del equipo URL: http://localhost:1337${data.image[0]?.url}`);

  return (
    <div className="custom-about-us p-6 max-w-4xl mx-auto" style={{ backgroundColor: theme.token.backgroundColor }}>
      <h2 className="text-3xl font-bold text-center mb-6" style={{ color: theme.token.colorTextBase }}>
        ¿Quienes Somos?
      </h2>
      <p className="text-center mb-8" style={{ color: theme.token.colorTextBase }}>
        {data.description}
      </p>

      {/* muestro la imagen del equipo */}
      <div className="mb-8 text-center" style={{ width: "100%", height: "300px" }}>
        {data.image && data.image[0] ? (
          <img
            src={`http://localhost:1337${data.image[0]?.url}`}
            alt="Imagen del equipo"
            className="w-full h-full object-cover"
          />
        ) : (
          <p>No se encontró imagen del equipo</p>
        )}
      </div>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.token.colorTextBase }}>
          Equipo
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {sortedPeople.map((person, index) => {
           /* arreglar */
           console.log(person); 


            return (
              <div
                key={index}
                className={`text-center p-4 rounded-lg shadow ${theme.token.backgroundColor === '#121212' ? 'bg-gray-700' : 'bg-gray-100'}`}
               
              >
                <img
                  src={person.photo}
                  alt={person.full_name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium" style={{ color: theme.token.colorTextBase }}>
                    {person.full_name}
                  </p>
                  <p className="text-sm" style={{ color: theme.token.colorTextBase }}>
                    {person.role_person}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* info*/}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.token.colorTextBase }}>
          Información
        </h3>
        <p className="text-center mb-4" style={{ color: theme.token.colorTextBase }}>
          {data.footer}
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

