import { useEffect, useState } from 'react';
import { ArrowUpward as ArrowUpwardIcon } from '@material-ui/icons';

import './style.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="scroll-top">
        <a href="#top">
          <ArrowUpwardIcon fontSize="large" />
        </a>
      </div>
    )
  );
};

export default ScrollToTop;
