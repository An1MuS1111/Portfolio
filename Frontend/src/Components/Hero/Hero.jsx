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
                    <a href="https://www.linkedin.com/in/khalidrafi1111" target='_blank'>Linkedin</a>
                    <br />
                    <a href="https://github.com/An1MuS1111" target='_blank'>Github</a>
                    <br />
                    <a href="https://www.instagram.com/khalidrafi1111/" target='_blank'>Instagram</a>
                    <br />
                    <a href="https://www.facebook.com/" target='_blank'>Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Hero