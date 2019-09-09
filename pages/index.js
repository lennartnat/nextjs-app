import React from 'react';

import { Button } from 'components';
import style from './styles.scss';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Next Playground';
  }, []);

  return (
    <div className={style.home}>
      <h1 className={style.greeting}>Hello there!</h1>
      <div className={style.etc}>
        <p>I've created this project to serve as my Next.js playground.</p>
        <p>I'm still thinking about what to build.</p>
        <p>For the meantime, have a look at the following:</p>
        <br />
        <Button link={'https://github.com/lennartnat'} styles={style.btn_github}>
          Github
        </Button>
        <Button link={'https://www.linkedin.com/in/aldrine-lennart-yap/'}>LinkedIn</Button>
        <Button link={'/Nature'} styles={style.btn_nature}>
          Nature
        </Button>
      </div>
    </div>
  );
};

export default Home;
