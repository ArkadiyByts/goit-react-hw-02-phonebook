import PropTypes from 'prop-types';


const GlobalTitle = ({title}) => {
  return (
    <h2 >{title}</h2>
  );
}

GlobalTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default GlobalTitle;