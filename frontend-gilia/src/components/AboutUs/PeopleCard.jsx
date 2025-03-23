import { API_BASE_URL } from "../../config/apiConfig";

const PeopleCard = ({ person, theme }) => {
  const backgroundColor = theme.token.backgroundColorSecondary;
  const shadowColor = theme.token.colorTextBase;

  return (
    <div
      className="text-center p-6 rounded-lg shadow-md"
      style={{
        width: '220px',
        transition: 'all 0.3s ease-in-out',
        backgroundColor,
        boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 2px ${shadowColor}`,
      }}
    >
      <img
        src={`${API_BASE_URL}${person.photo?.[0]?.url}`} // URL de la imagen
        alt={person.full_name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
      />
      <div>
        <p
          className="font-medium"
          style={{ color: theme.token.colorTextBase }}
        >
          {person.full_name}
        </p>
        <p
          className="text-sm"
          style={{ color: theme.token.colorTextBase }}
        >
          {person.role_person}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
