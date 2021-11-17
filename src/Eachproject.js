import React from 'react';
import 'bootstrap'
import "./EachProject.css"

const EachProject = ({ img, address, text, heading }) => {
    return (

        <div className='each' style={{ marginTop: '50px', display: 'inline-flex', justifyContent: 'space-evenly', marginRight: '40px' }}>
            <div className='row'>

                <div className="col-lg-6 col-md-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <a target='_blank' href={address} rel="noreferrer">
                            <img style={{ backgroundBlendMode: 'saturation', height: '200px', width: '100%' }}
                                src={img} className="card-img-top" alt="..." />
                        </a>
                        <div className="card-body">
                            <h3 style={{ fontFamily: 'cursive' }} className="card-text">{heading}</h3>
                            <hr />
                            <p>{text}</p>
                        </div>
                    </div>
                </div >
            </div >
        </div>
        // </div>


    )
}

export default EachProject;