import Button from '../Button/Button';
import Htag from '../Htag/Htag';

import { SortProps } from './Sort.props';

import styles from './Sort.module.css';

function Sort({onSortByCity, onSortByCompany}: SortProps): JSX.Element {
  return (
    <div className={styles.sort}>
      <Htag tag='h3'>Сортировка</Htag>
      <Button appearance='primary' onClick={onSortByCity}>по городу</Button>
      <Button appearance='primary' onClick={onSortByCompany}>по компании</Button>
    </div>
  );
}

export default Sort;
