import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import sydImage from './images/sydney-image.jpeg';
import melbImage from './images/melb-image.jpeg';
import gcImage from './images/gold-coast-image.jpeg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Sydney',
          sydImage,
          '?address=Sydney%2C%20New%20South%20Wales%2C%20Australia&bounds=-33.578140996%2C151.343020992%2C-34.118344992%2C150.520928608'
        )}
        {locationLink(
          'Melbourne',
          melbImage,
          '?address=Melbourne%2C%20Victoria%2C%20Australia&bounds=-37.511273722%2C145.512528832%2C-38.433859306%2C144.593741856'
        )}
        {locationLink(
          'Gold Coast',
          gcImage,
          '?address=Gold%20Coast%2C%20Queensland%2C%20Australia&bounds=-27.708126368%2C153.552171232%2C-28.200317147%2C153.186551712'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
