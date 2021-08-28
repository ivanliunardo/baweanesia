import React, { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import BlogCards from '../BlogCards';
import BlogPost from '../BlogPost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from '../Footer';


function Blog() {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path='/blog' component={BlogCards} />
                <Route exact path='/blog/:id' component={BlogPost} />
            </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default Blog;
