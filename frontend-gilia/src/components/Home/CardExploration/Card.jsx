import PropTypes from 'prop-types';
import "./Card.css";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/prop-types
const Card = ({ titulo, descripcion, link, activa }) => {
  return (
    <div className={classNames(activa ? 'custom-card-active' : 'custom-card-inactive mt-[10%]', ' custom-card-home custom-animation-start')} >
      <div className="absolute top-0 inset-x-0 h-1.5 bg-indigo-600 rounded-t-lg" aria-hidden="true" />
      <h3 id={titulo} className={classNames(activa ? ' text-2xl text-white' : ' text-1xl text-gray-300 ',' font-semibold  ', 'text-center custom-text-card'   )}> {titulo} </h3>
      <p className="mt-6 custom-descrip-card">{descripcion}</p>
      <a href={link}   aria-describedby={titulo} className={classNames(
          activa
            ? 'btn-active'
            : 'btn-inactive',
          'custom-btn'
        )}
        onClick={link}
      >Ver más</a>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClickTo: PropTypes.func,
  featured: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

export default Card;
