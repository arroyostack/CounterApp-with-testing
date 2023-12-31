import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name } ) => {
  return (
    <>
      <h1 data-testid='test-title'>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: 'There is no name',
  subTitle: 'There is no subtitle',
  title: 'There is no title',
};
