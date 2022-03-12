import cn from 'classnames';

import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

function Htag({tag, children, className}: HtagProps): JSX.Element {
  switch(tag) {
    case 'h2': {
      return <h2 className={cn(styles.h2, className)}>{children}</h2>;
    }

    case 'h3': {
      return <h3 className={cn(styles.h3, className)}>{children}</h3>;
    }
  }
}

export default Htag;
