import Pages from '../util/Pages';
import {useEffect, useState} from 'react';
import {store} from '../util/reducers';

function Page() {
  const [page, setPage] = useState('home');

  const getPageComponent = (page: string) => {
    const component = Pages.get(page);
    return component;
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setPage(store.getState().page);
    });
    return () => {
      unsubscribe;
    };
  });

  return <section>{getPageComponent(page)}</section>;
}

export default Page;
