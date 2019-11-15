import Pages from '../util/Pages';
import Navbar from './Navbar';
import {gsap} from 'gsap';
import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {store} from '../util/reducers';

const style = (
  <style>{`
     
`}</style>
);

function Page() {
  const [page, setPage] = useState('home');
  let pageRef = useRef<HTMLElement>(null);

  const getPageComponent = (page: string) => {
    return Pages.get(page);
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setPage(store.getState().page);
    }); 

    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <>
      <Navbar />
      <section ref={pageRef}>{getPageComponent(page)}</section>
      {style}
    </>
  );
}

export default Page;
