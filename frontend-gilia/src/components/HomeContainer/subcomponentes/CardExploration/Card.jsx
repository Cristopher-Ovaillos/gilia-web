import PropTypes from 'prop-types';
import "./Card.css";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Card = ({ id, name, autor, description, onClickTo, featured, href }) => {
  return (
    <div className={classNames(featured ? 'custom-card-active' : 'custom-card-inactive mt-[10%]', ' custom-card-home')} >
      <div className="absolute top-0 inset-x-0 h-1.5 bg-indigo-600 rounded-t-lg" aria-hidden="true" />
      <h3 id={id} className={classNames(featured ? ' text-2xl text-white' : ' text-1xl text-gray-300 ',' font-semibold  ', 'text-center custom-text-card'   )}> {name} </h3>
      <p className="flex-start items-baseline ">   <span className={classNames(featured ? 'text-gray-400' : 'text-gray-500', ' custom-autor-card')}> {autor} </span> </p>
      <p className={classNames(featured ? 'text-gray-300' : 'text-gray-500', 'mt-6 custom-descrip-card')}>{description}</p>
      <a href={href}   aria-describedby={id} className={classNames(
          featured
            ? 'btn-active'
            : 'btn-inactive',
          'custom-btn'
        )}
        onClick={onClickTo} // Si necesitas usar el onClickTo para la interacción.
      >
        Ver más</a>
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
