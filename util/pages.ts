import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../components/Home'))
const About = dynamic(() => import('../components/About'))
const Work = dynamic(() => import('../components/Work'))
const Fun = dynamic(() => import('../components/Fun'))
const Blog = dynamic(() => import('../components/Blog'))
 
enum Page {
    HOME = 'home', ABOUT='about', WORK='work', FUN='fun', BLOG='blog'
}

const pageMap = new Map();
pageMap.set(Page.HOME, Home);
pageMap.set(Page.ABOUT, About);
pageMap.set(Page.WORK, Work);
pageMap.set(Page.FUN, Fun);
pageMap.set(Page.BLOG, Blog); 

const getPage = (page: Page) => { 
    return pageMap.get(page); 
}

export {Page as PAGE, getPage};