import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import React, { useEffect, useState } from "react";
import Logo from './Logo';
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'b', 'a', 's', 't', 'i', 'a', 'n'];
    const jobArray = ['L', 'e', 'z', 'a', 'm', 'a'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer"></img>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={23}/>
                    </h1>
                    <h2>
                        Python / JavaScript / Testing / QA
                    </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Home
