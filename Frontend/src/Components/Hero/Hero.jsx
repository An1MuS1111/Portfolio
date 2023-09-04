import './Hero.css'


const Hero = () => {
    return (
        <div className='section__hero'>
            <p className='sect__soft_eng'>Software<br />Engineer</p>
            <p className='sect__second_desc'>specialized in Web Design, UX / UI, Webflow, and Front End Development.</p>
            <p className='sect__third_desc'>Passionate software engineer with a strong focus on the MERN stack. Experienced in JavaScript, React, Node.js, and MongoDB. Proven ability to build and deploy scalable and reliable web applications. Graduated with a Bachelor of Science in Software Engineering from the Universiti teknologi Malaysia</p>
            <div className='sect__hero_links'>
                <p>Let's get connected</p>
                <div className="hero__links">
                    <a href="">Linkedin</a>
                    <br />
                    <a href="">Github</a>
                    <br />
                    <a href="">Instagram</a>
                    <br />
                    <a href="">Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Hero