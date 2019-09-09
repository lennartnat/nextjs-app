const IMAGE_IDS = {
  IMG_NATURE: 'images/nature.png'
};

function Image({ imgId, styles }) {
  return <img src={require(`static/${IMAGE_IDS[imgId]}`)} alt={imgId} className={styles} />;
}

export default Image;
