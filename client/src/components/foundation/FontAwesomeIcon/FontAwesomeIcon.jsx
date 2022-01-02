import React from 'react';

/**
 * @typedef {object} Props
 * @property {string} iconType
 * @property {'solid' | 'regular'} styleType
 */

/** @type {React.VFC<Props>} */
const FontAwesomeIcon = ({ iconType, styleType }) => {
  return (
    <svg className="font-awesome inline-block leading-none fill-current">
      {/* クロスドメインでの読み込みができないのでCDNからの配信は諦める */}
      <use xlinkHref={`/sprites/font-awesome/${styleType}.svg#${iconType}`} />
    </svg>
  );
};

export { FontAwesomeIcon };
