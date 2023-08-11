import { memo } from 'react';
import logo from '../logo.svg';
import './About.css'

const About = () => {
    return (<div className='about'>
        <div className='img-section'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='about-para'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente quidem pariatur tempore fuga totam delectus quas odio
                repellat vero nisi! Cupiditate, commodi ipsum error similique
                rem perferendis adipisci placeat deleniti, fugit laudantium
                impedit deserunt. Dicta, pariatur ducimus, error cum fugiat
                quae unde, aut itaque ea harum explicabo officia laborum
                voluptates.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Modi impedit ut cum nesciunt dolores nam fugiat, labore
                a perspiciatis quibusdam placeat quo blanditiis sint
                accusamus nostrum eum soluta temporibus assumenda.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente quidem pariatur tempore fuga totam delectus quas odio
                repellat vero nisi! Cupiditate, commodi ipsum error similique
                rem perferendis adipisci placeat deleniti, fugit laudantium
                impedit deserunt. Dicta, pariatur ducimus, error cum fugiat
                quae unde, aut itaque ea harum explicabo officia laborum
                voluptates.</p>
        </div>
    </div>);
}

export default memo(About);