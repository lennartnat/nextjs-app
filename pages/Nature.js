import { Button, Image } from 'components';
import style from './styles.scss';

const Nature = () => (
  <div className={style.nature}>
    <Button link={'/'}>←</Button>
    <div className={style.natureDiv}>
      <p>I got bored and drew this on my laptop:</p>
      <Image imgId={'IMG_NATURE'} />
    </div>
  </div>
);

export default Nature;
