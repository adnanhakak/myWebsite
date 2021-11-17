import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Landing';
import Projects from './Projects';
import Articles from './Articles';
import './Navbar.css'
import Navbar from './Navbar'
import ArticleList from './ArticleList';

const App = () => {

    const content = [
        {
            heading: 'The reality of black hole',
            alt: 'We have grown accustomed to the idea of black holes, but their existence took time to gain acceptance...',
            date: '1-nov-2021',
            id: 1,
            content: `We have grown accustomed to the idea of black holes, but their existence took time to gain acceptance. The Nobel Prize in Physics has been awarded to three scientists who made the idea of black holes easier to swallow. Roger Penrose from the University of Oxford received half of the prize for his theoretical description of how gravitational collapse could lead to a black hole. The other half of the prize recognizes Reinhard Genzel of the Max Planck Institute for Extraterrestrial Physics in Germany and Andrea Ghez from the University of California, Los Angeles, for their efforts in uncovering the supermassive black hole at the center of our Galaxy. Added to recent detections of gravitational waves from black hole mergers, the reality of black holes has become inescapable

            The theory that an object might be dense enough to trap light is more than 200 years old.But the possibility led to something of a crisis in the years following Albert Einstein’s publication of his general theory of relativity in 1915. According to the theory, as a spherically symmetric object collapses, there is a radius(the so- called Schwarzschild radius) at which the infalling material would become cut off from outside observers[1](see also Focus: Landmarks—Forgotten Black Hole Birth).Even weirder than this “event horizon” was the prediction that a point of infinite density would develop in the object’s interior—a kind of big bang in reverse.This so - called singularity seemed so absurd—a potential “failure” of general relativity—that many physicists assumed that some mechanism must prevent a star or other object from ever collapsing that far.
            
            The situation shifted in the early 1960s, when astronomers identified the first quasars—extremely bright objects in distant galaxies[2].Their enormous energy and small size led to speculations that they might be million - solar - mass black holes(although the term “black hole” wasn’t coined until 1967).To make black holes seem more reasonable, however, one needed to show that material can collapse to a point in real - world conditions—that is, without assuming perfect spherical symmetry, as previous calculations had done.
            
            Penrose addressed the question of non - spherical collapse in 1965—fifty years after the debut of general relativity[3].He attacked the problem by arguing that any object with an event horizon—regardless of its shape—will contain what he called a trapped surface.He defined this surface to have the property that, if you placed light bulbs on it, all of the emitted light rays would converge, thanks to the strong gravity.For a sphere, this property implies that all of the light shines inward.The implication is that anything inside a black hole has only one future ahead of it: falling farther toward the center. “Penrose showed that the collapse process can't halt,” says gravity expert David Garfinkle from Oakland University in Michigan. “It keeps on proceeding until something catastrophic happens.” That catastrophe is a singularity.

    Penrose’s proof that the collapse of dying stars could naturally lead to singularities was a blow to Einstein’s theory, says theorist Vitor Cardoso from the Technical University of Lisbon, Portugal.However, Penrose did not want these singularities to be accessible from outside the black hole.As Cardoso explains, Penrose later developed the idea of “cosmic censorship,” in which the black hole’s horizon protects external observers from ever observing its singularity(see Synopsis: Cosmic Nudity).Penrose was also an early advocate for observing the skies in search of black - hole - influenced phenomena. “I only wish to make a plea for ‘black holes’ to be taken seriously and their consequences to be explored in full detail,” he wrote in 1969[4].
            
            Genzel and Ghez took the consequences of black holes seriously.For nearly three decades, they each led teams that collected evidence for a large black hole at the center of the Galaxy.Astrophysicists had previously suspected that such an object might be lurking there, based on the assumed presence of supermassive black holes in galaxies hosting quasars.But there was no direct evidence of a central black hole in our Galaxy'`
        },
        {
            heading: 'Into the worm hole',
            alt: 'Some wormholes may be “traversable”, meaning humans may be able to travel through them. For that though...',
            date: '15-nov-2021',
            id: 2,
            content: `Albert Einstein’s theory of general relativity profoundly changed our thinking about fundamental concepts in physics, such as space and time. But it also left us with some deep mysteries. One was black holes, which were only unequivocally detected over the past few years. Another was “wormholes” – bridges connecting different points in spacetime, in theory providing shortcuts for space travellers.

            Wormholes are still in the realm of the imagination. But some scientists think we will soon be able to find them, too. Over the past few months, several new studies have suggested intriguing ways forward.
            
            Black holes and wormholes are special types of solutions to Einstein’s equations, arising when the structure of spacetime is strongly bent by gravity. For example, when matter is extremely dense, the fabric of spacetime can become so curved that not even light can escape. This is a black hole.
            
            As the theory allows the fabric of spacetime to be stretched and bent, one can imagine all sorts of possible configurations. In 1935, Einstein and physicist Nathan Rosen described how two sheets of spacetime can be joined together, creating a bridge between two universes. This is one kind of wormhole – and since then many others have been imagined.
            
            Some wormholes may be “traversable”, meaning humans may be able to travel through them. For that though, they would need to be sufficiently large and kept open against the force of gravity, which tries to close them. To push spacetime outward in this way would require huge amounts of “negative energy”.
            
            Sounds like sci-fi? We know that negative energy exists, small amounts have already been produced in the lab. We also know that negative energy is behind the universe’s accelerated expansion. So nature may have found a way to make wormholes.
            
            Spotting wormholes in the sky
            How can we ever prove that wormholes exist? In a new paper, published in the Monthly Notices of the Royal Society, Russian astronomers suggest they may exist at the centre of some very bright galaxies, and propose some observations to find them. This is based on what would happen if matter coming out of one side of the wormhole collided with matter that was falling in. The calculations show that the crash would result in a spectacular display of gamma rays that we could try to observe with telescopes.
            
            Image of a black hole by the Event Horizon Telescope.
            We’ve only just seen a black hole. Event Horizon Telescope/wikipedia, CC BY-SA
            This radiation could be the key to differentiating between a wormhole and a black hole, previously assumed to be indistinguishable from the outside. But black holes should produce fewer gamma rays and eject them in a jet, while radiation produced via a wormhole would be confined to a giant sphere. Although the kind of wormhole considered in this study is traversable, it would not make for a pleasant trip. Because it would be so close to the centre of an active galaxy, the high temperatures would burn everything to a crisp. But this wouldn’t be the case for all wormholes, such as those further from the galactic centre.
            
            The idea that galaxies can harbour wormholes at their centres is not new. Take the case of the supermassive black hole at the heart of the Milky Way. This was discovered by painstakingly tracking of the orbits of the stars near the black hole, a major achievement which was awarded the Nobel Prize in Physics in 2020. But one recent paper has suggested this gravitational pull may instead be caused by a wormhole.
            
            Unlike a black hole, a wormhole may “leak” some gravity from the objects located on the other side. This spooky gravitational action would add a tiny kick to the motions of stars near the galactic centre. According to this study, the specific effect should be measurable in observations in the near future, once the sensitivity of our instruments gets a little bit more advanced.
            
            Coincidentally, yet another recent study has reported the discovery of some “odd radio circles” in the sky. These circles are strange because they are enormous and yet not associated with any visible object. For now, they defy any conventional explanation, so wormholes have been advanced as a possible cause.
            
            A can of worms
            Wormholes hold a strong grip on our collective imagination. In a way, they are a delightful form of escapism. Unlike black holes which are a bit frightening as they trap everything that ventures in, wormholes may allow us to travel to faraway places faster than the speed of light. They may in fact even be time machines, providing a way to travel backwards – as suggested by the late Stephen Hawking in his final book.
            
            Wormholes also crop up in quantum physics, which rules the world of atoms and particles. According to quantum mechanics, particles can pop out of empty space, only to disappear a moment later. This has been seen in countless experiments. And if particles can be created, why not wormholes? Physicists believe wormholes may have formed in the early universe from a foam of quantum particles popping in and out of existence. Some of these “primordial wormholes” may still be around today.`

        },
        {
            heading: 'Theory of relativity',
            alt: 'Relativity, wide-ranging physical theories formed by the German-born physicist Albert Einstein.With his theories...',
            date: '13-oct-2021',
            id: 3,
            content: ` 
            Relativity, wide-ranging physical theories formed by the German-born physicist Albert Einstein.
            With his theories of special relativity (1905) and general relativity (1915), Einstein overthrew many assumptions
             underlying earlier physical theories, redefining in the process the fundamental concepts of space, time, matter,
             energy, and gravity. Along with quantum mechanics, relativity is central to modern physics. In particular, relativity 
            provides the basis for understanding cosmic processes and the geometry of the universe itself.
            
            E = mc2
            
            
            “Special relativity” is limited to objects that are moving with respect to inertial frames of reference—i.e,
             in a state of uniform motion with respect to one another such that an observer cannot, by purely mechanical experiments, 
            distinguish one from the other. Beginning with the behaviour of light (and all other electromagnetic radiation), 
            the theory of special relativity draws conclusions that are contrary to everyday experience but fully confirmed by
             experiments. Special relativity revealed that the speed of light is a limit that can be approached but not reached
             by any material object; it is the origin of the most famous equation in science, E = mc2; and it has led to other
             tantalizing outcomes, such as the “twin paradox.”
            
            
            
            Special and general relativity have profoundly affected physical science and human existence,
             most dramatically in applications of nuclear energy and nuclear weapons. Additionally, relativity and its rethinking 
            of the fundamental categories of space and time have provided a basis for certain philosophical, social, and artistic 
            interpretations that have influenced human culture in different ways.`



        }, {
            heading: 'The word of frontend development',
            alt: 'As you begin to explore a possible career in web development, you might wonder what a front end developer does...',
            date: '1-nov-2021',
            id: 4,
            content: `What Does a Front End Web Developer Do?
            
            As you begin to explore a possible career in web development, you might wonder what a front end developer does.
            
            Simply put, these developers focus on a website’s visitor-facing aspects; as opposed to a back end developer, who focuses on behind the scenes work; or a full stack developer who works on both sides.
            
            Their Responsibilities and Skills Go Hand in Hand
            Many actions a developer performs daily require skills like JavaScript or HTML coding, with a great deal of overlap in their day-to-day responsibilities. In this tutorial, we will explain the various tools and technologies these professionals use in their everyday work, as well as the skills needed to be successful in the field.
            
            What a Front End Developer Does: An Overview
            A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website’s appearance, as well as taking care of debugging. Whenever you visit a website, anything that you see, click on or otherwise use is the work of a front end developer.
            
            Common Tasks of a Front End Developer
            Although there is some variation across companies, you can generally expect a front end developer role to include some or all of the following: 
            
            Optimizing the user experience.
            Using HTML, JavaScript and CSS to bring concepts to life.
            Developing and maintaining the user interface.
            Implementing design on mobile websites.
            Creating tools that improve site interaction regardless of the browser.
            Managing software workflow.
            Following SEO best practices.
            Fixing bugs and testing for usability.
            Front End Development: Commonly Used Programming Languages
            Most front end developers spend a great deal of their time working in HTML, CSS and JavaScript, making proficiency in each key to their success.
            
            How Developers Use Each Programming Language
            Front end developers use HTML to lay out a document’s general structure and content, CSS for styling and JavaScript for situations that require advanced interactivity. Additionally, they might use AJAX (a combination of JavaScript and XML) to update specific areas of a website without having to refresh the entire page.
            
            Libraries and Frameworks
            Front end developers also commonly use the libraries built on these programming languages like AngularJS, jQuery and React; and design frameworks including Foundation and Bootstrap. CSS extensions, such as SASS, provide improved modularity and power.
            
            Additional Front End Development Languages
            While they are less common, front end developers may also use Python, Ruby or PHP to easily connect data with the back end of their website.
            
            Common Tools Used in Front End Development
            Because front end developers use a combination of design and web development in their work, the tools they use span across these areas of focus.
            
            Graphic Design Tools
            Before a front end developer begins coding, they typically use graphic design tools to create a prototype of their website, which lets them test and experiment with the user interface before working out the actual code.
            
            Depending on the team size team and project scope, the process might be as simple as using a pencil and paper, or it might require graphics editing programs like Sketch or Photoshop, prototyping tools like Balsmiq Mockups or more advanced graphical editing tools such as Figma or Illustrator.
            
            Code Editing Tools
            A code editing tool is simply the program a front end developer chooses to use to write the code for their website. Some developers prefer to use a lightweight editor like Notepad, while others opt for something more feature-rich like Visual Studio or Eclipse.
            
            Before you decide on a code editor, try out a few different ones to see which one you work with best.
            
            More Skills for Front End Development
            Of course, front end developers do more than design and code a website’s look and feel. Below, we’ll cover some of the more common additional skills these professionals rely on in their work.
            
            Using CSS Preprocessors
            Most front end developers use CSS preprocessors to add functionality to CSS coding, making it more scalable and easier to interact with. Prior to publishing the code on your website, CSS preprocessors transition it into well-formatted CSS that works across a variety of browsers, the most in-demand being LESS and SASS. 
            
            Using APIs and RESTful Services
            A front end developer will also interact with and make use of APIs and RESTful services. REST (Representational State Transfer) is a lightweight architecture that makes network communications simpler, while APIs and RESTful services follow that architecture. 
            
            Creating Maintaining Mobile and Responsive Design
            With the rise of people using mobile devices to connect to the internet, it has become essential for websites to be mobile-friendly. As such, most front end developers now create responsive designs or mobile designs for their websites. 
            
            Responsive design changes a website’s layout depending on the device and screen size, and occasionally requiring changes to the content and functionality based on those factors. 
            
            Developing Across Browsers
            If your web development isn’t functional across the full range of browsers that are available today, you will miss out on an entire category of potential web users. While browsers are fairly consistent, their differences can be significant, including in terms of coding interpretation. A front end web developer must understand these differences and incorporate them into their code. `

        }]

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' render={() => <Landing />} />;
                <Route exact path='/projects' render={() => <Projects />} />;
                <Route exact path='/articles/' render={() => <Articles content={content} />} />;
                <Route path='/articles/:id' render={() => <ArticleList content={content} />} />;
            </Switch>
        </>
    )

}

export default App;