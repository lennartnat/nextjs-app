const IMAGE_IDS = {
  IMG_NATURE: '/static/images/nature.png'
};

function Image({ imgId, styles }) {
  return <img src={IMAGE_IDS[imgId]} alt={imgId} className={styles} />;
}

export default Image;
