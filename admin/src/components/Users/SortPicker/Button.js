import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Carret } from 'strapi-helper-plugin';

const Button = isOpen => {
  return (
    <>
      <FormattedMessage id="app.components.Users.SortPicker.button-label" />
      <Carret isUp={isOpen} fill={isOpen ? "#C128F7" : "#292b2c"} />
    </>
  )
};

export default Button;
