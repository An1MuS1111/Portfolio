import './Technical.css'

const Technical = (props) => {


    return (
        <div className='section__technical'>
            <p className='sect__tech__title'>Hand-on Experience on Tools below!</p>
            <p className='sect__tect__desc'>This tools are used by product managers in daily basis, and our program is designed in a way that you will learn how to used this tools and when to implement this tools in real life projects</p>
            <div className='sect__tech__tools'>
                {props.tools.map((tool) => {
                    return (
                        <div>
                            <img src="" alt="" />
                            <p>{tool.name}</p>
                            <p>{tool.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Technical