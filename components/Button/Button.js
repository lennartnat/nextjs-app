import Link from 'next/link';
import style from './Button.scss';

const Button = ({ text, children, link, styles }) => (
  <Link href={link}>
    <a className={`${style.button} ${styles}`}>{text || children}</a>
  </Link>
);

export default Button;
