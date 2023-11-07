import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, backgroundColor, size, label, noBorder, ...props }) => {
  let mode;
  switch (type) {
    case 'primary':
      mode = 'storybook-button--primary'
      break;
    case 'secondary':
      mode = 'storybook-button--secondary'
      break;
    case 'text':
      mode = 'storybook-button--text';
      break;
    default:
      mode = '';
  }
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.oneOf(['blue', 'orange', 'lightgrey']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'text']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  onHover: undefined
};
