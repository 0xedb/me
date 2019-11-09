import About from '../components/About';
import Fun from '../components/Fun';
import Work from '../components/Work';
import Home from '../components/Home';
import Blog from '../components/Blog';

const Pages = new Map<string, JSX.Element>();
Pages.set('about', <About />);
Pages.set('work', <Work />); 
Pages.set('home', <Home />);
Pages.set('blog', <Blog />);
Pages.set('fun', <Fun />);

export default Pages;
