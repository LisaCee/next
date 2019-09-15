import Layout from './MyLayout';
import Intro from './Intro';
import Contact from './Contact';
import Gallery from './Gallery';

const Index = () => (
    <div>
        <Layout>
            <Intro />
            <Gallery/>
            <Contact />
        </Layout>
    </div>
);

export default Index;