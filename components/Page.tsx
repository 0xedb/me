import Navbar from './Navbar'; 
import NavTab from './NavTab';

const style = (
  <style>{`
     
`}</style>
);

function Page() { 

  return (
    <>
      <Navbar />
      <NavTab /> 
      {style}
    </>
  );
}

export default Page;
