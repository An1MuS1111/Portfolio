import { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero'
import Technical from "./Components/Technical/Technical";






const App = () => {

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
        </div>
    )
}

export default App;