import React from 'react';
import PropTypes from 'prop-types';
import path from 'path';
import Link from 'next/link';

import withI18N from '../hoc/withI18N';

const Header = ({ imagePath, t }) => (
  <div className="header">
    <div className="container">
      <Link href="/index" as="/">
        <a><img src={path.join(imagePath, 'favicon.png')} /></a>
      </Link>
      <span>{t('common:header.title')}</span>
    </div>
  </div>
);

Header.propTypes = {
  t: PropTypes.func,
  imagePath: PropTypes.string,
};

export default withI18N(Header);
