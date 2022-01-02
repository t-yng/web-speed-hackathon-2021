/**
 * @param {string} imageId
 * @returns {string}
 */
function getImagePath(imageId) {
  return `https://cdn.jsdelivr.net/gh/t-yng/web-speed-hackathon-2021@main/public/images/${imageId}.webp`;
}

/**
 * @param {string} movieId
 * @returns {string}
 */
function getMoviePath(movieId) {
  // jsdelivr が20MBの制限があるので、gifはrawcdnで配信
  return `https://rawcdn.githack.com/t-yng/web-speed-hackathon-2021/4ba5b8b62ecfc5e3df58806affe904b94c49b745/public/movies/${movieId}.gif`;
}

/**
 * @param {string} soundId
 * @returns {string}
 */
function getSoundPath(soundId) {
  return `https://cdn.jsdelivr.net/gh/t-yng/web-speed-hackathon-2021@main/public/sounds/${soundId}.mp3`;
}

/**
 * @param {string} profileImageId
 * @returns {string}
 */
function getProfileImagePath(profileImageId) {
  return `https://cdn.jsdelivr.net/gh/t-yng/web-speed-hackathon-2021@main/public/images/profiles/${profileImageId}.webp`;
}

export { getImagePath, getMoviePath, getSoundPath, getProfileImagePath };
