import Link from 'next/link';
import style from './Button.scss';

const Button = ({ text, children, link }) => (
  <Link href={link}>
    <a className={style.button}>{text || children}</a>
  </Link>
);

export default Button;
