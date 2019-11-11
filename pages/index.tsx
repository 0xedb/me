import HeadMeta from '../components/HeadMeta';
import Navbar from '../components/Navbar';

const style = (
  <>
    <style jsx>{`
      div {
        height: 100vh;
      }
    `}</style>

    <style global jsx>{`
      .min {
        min-width: 300px;
      }
    `}</style>
  </>
);

const Index = () => (
  <>
    <div>
      <HeadMeta>
        <title>Bruno Edoh | theBashShell</title>
      </HeadMeta>
      <Navbar />
    </div>
    {style}
  </>
);

export default Index;
