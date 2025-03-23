import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Loader from '../Loader/Loader';
import { fetchAboutUsData } from './AboutAPI';
import PeopleCard from './PeopleCard';
import { API_BASE_URL } from "../../config/apiConfig";

const AboutUs = () => {
  const { theme } = useTheme();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchAboutUsData(API_BASE_URL);

      console.log(fetchedData);
      
      setData(fetchedData);
    };

    getData();
  }, []);

  if (!data) {
    return <Loader />;
  }

  const ordenarPorRol = (people) => {
    if (!Array.isArray(people)) return [];
    const roleOrder = ['Director', 'Investigador', 'Colaborador', 'Becario'];
    return people.sort((a, b) => roleOrder.indexOf(a.role_person) - roleOrder.indexOf(b.role_person));
  };

  const sortedPeople = data.people ? ordenarPorRol(data.people) : [];

  return (
    <div
      className="custom-about-us p-6 max-w-4xl mx-auto"
      style={{ backgroundColor: theme.token.backgroundColor }}
    >
      <h2
        className="text-3xl font-bold text-center mb-6"
        style={{ color: theme.token.colorTextBase }}
      >
        ¿Quienes Somos?
      </h2>
      <p
        className="text-center mb-8"
        style={{ color: theme.token.colorTextBase }}
      >
        {data.description}
      </p>

      {/* Imagen del equipo */}
      <div
        className="mb-8 text-center"
        style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {data.image ? (
          <img
            src={`${API_BASE_URL}${data.image?.url}`}
            alt="Imagen del equipo"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        ) : (
          <p>No se encontró imagen del equipo</p>
        )}
      </div>

      <section className="mb-8">
        <h3
          className="text-2xl font-semibold mb-4"
          style={{ color: theme.token.colorTextBase }}
        >
          Equipo
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {sortedPeople.map((person) => (
            <PeopleCard key={person.id} person={person} theme={theme} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3
          className="text-2xl font-semibold mb-4"
          style={{ color: theme.token.colorTextBase }}
        >
          Información
        </h3>
        <p
          className="text-center mb-4"
          style={{ color: theme.token.colorTextBase }}
        >
          {data.information}
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
