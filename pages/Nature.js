import Image from '../components/Image';
import Button from '../components/Button';
import style from './styles.scss';

const Nature = () => (
  <div className={style.nature}>
    <Button link={'/'}>Home</Button>
    <div className={style.natureDiv}>
      <p>I got bored and drew this on my laptop:</p>
      <Image imgId={'IMG_NATURE'} styles={style.natureImg} />
    </div>
  </div>
);

export default Nature;
