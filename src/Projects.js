import React from 'react';
import 'bootstrap';
import EachProject from './Eachproject';
import crypto from './images/crypto.jpg';
import todo from './images/todo.png';
import todoreact from './images/todoreact.png'
import scorekeeper from './images/scorekeeper.jpg'
import reaction from './images/reaction.jpg'
import back from './images/xyz.jpg'
import tranjour from './images/tranjour.jpg'

const Projects = () => {
    return (
        <div className="projects"  >
            <div className='textdiv'>
                P<span className="roj">rojects</span>
            </div>

            <div className="container" style={{ position: 'absolute', marginLeft: '240px' }}  >
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <EachProject address='https://scorekeeperrepresent.netlify.app' img={scorekeeper} text='Track the score of 2 teams or players' heading='score keeper' location='begin' />
                    <EachProject address='https://timegamerepresent.netlify.app' img={reaction} text='Check your reaction with aim labs here' heading='time game' location='end' />
                    <EachProject address='https://cryptopricesrepresent.netlify.app' img={crypto} text='Type name of the crypto to get the price ' heading='Get crypto prices' location='center' />
                    <EachProject address='https://tranjour.netlify.app/' img={tranjour} text='Use encyclopedia,search images,translate text in 15 different languages' heading='Trajour' location='begin' />
                    <EachProject address='https://todoappdark.netlify.app/' img={todoreact} text='Manage ur day with list of todos' heading='Todo list app with react' location='end' />
                    <EachProject address='https://todojsrepresent.netlify.app' img={todo} text='Manage ur day with list of todos' heading='to do listapp with vjs' location='begin' />
                </div>
            </div>

            <div className='back' >
                <img className='image' src={back} alt='back' />

            </div>
        </div>
    )
}

export default Projects;