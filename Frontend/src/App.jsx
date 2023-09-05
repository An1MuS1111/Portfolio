import { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero'
import Technical from "./Components/Technical/Technical";
import License from "./Components/License/License";






const App = () => {

    const [licenses, setLicences] = useState([{
        id: 1,
        name: 'React, NodeJS, Express & MongoDB - The MERN Fullstack Guide',
        provider: 'Academind',
        description: 'loren ipsum',
        image: 'images/license/license_1.jpg'
    }])



    const [tools, setTools] = useState([{
        id: 1,
        name: 'Adobe XD',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'

    }, {
        id: 2,
        name: 'Adobe XD',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'
    }, {
        id: 3,
        name: 'Adobe Dick',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'
    }, {
        id: 3,
        name: 'Adobe Dick',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'
    }, {
        id: 1,
        name: 'Adobe XD',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'

    }, {
        id: 2,
        name: 'Adobe XD',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'
    }, {
        id: 3,
        name: 'Adobe Dick',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'
    }, {
        id: 3,
        name: 'Adobe Dick',
        description: 'Issue tracking tool that helps product managers track the progress of the product development',
        image: 'images/technical/Adobe-XD.png'
    }
    ])
    return (
        <div>
            <Navbar />
            <Hero />
            <Technical tools={tools} />
            <License licenses={licenses} />

        </div>
    )
}

export default App;