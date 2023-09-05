import './License.css'

const License = (props) => {
    return (
        <div className='section__license'>
            <p className='section__license_head'>License & Certification</p>
            <div className='license__block'>
                {props.licenses.map(license => {
                    return (
                        <div className='lice__block_each'>
                            <p className='lice__name'>{license.name}</p>
                            <p className='lice__provider'>Provided By: {license.provider}</p>
                            <img src={license.image} alt="" className='lice__image' />
                            <p className='lice__desc'>Description: {license.description}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default License