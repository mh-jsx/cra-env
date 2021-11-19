import PropTypes from "prop-types";

/**
 * Component for showing page header & footer.
 * @component
 * Renders a <Index /> component
 * @param  props
 * @param  props.currentPage {number} - Current active tab index.
 *
 * @returns {JSX.Element} - Rendered component
 */
const Index = ({currentPage}) => {
  return <> </>;
};

export default Index;

Index.propTypes = {
  currentPage: PropTypes.number.isRequired,
};
Index.defaultProps = {
  // currentPage: 0,
};
