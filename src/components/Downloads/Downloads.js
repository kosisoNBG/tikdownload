import React from 'react'
import './Download.css'

const Downloads = ({ result }) => {
  return (
<div className='col-md-6'>
<div className="card text-center box-style ">
  <div className="card-header">
    <h3>Download Result</h3>
  </div>
  <div className="card-body row">
    <div className='col-md-4'>
    <img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" style={{width:'150px'}} />
        {/* <div className="box">
        This is a box!
        </div> */}
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className='col-md-6 download-con'>
        <span className='row'>
    <a href="#" className="btn btn-primary mb-2">Download</a>
    <a href="#" className="btn btn-primary mb-2 btn-success">Download Server 02</a>
    <a href="#" className="btn btn-primary btn-secondary">Download Another video</a>
        </span>
    </div>
  </div>
</div>
        {/* <div className="card w-75 mb-3 box-style">
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button">Button</button>
            <button className="btn btn-primary" type="button">Button</button>
            </div>
        </div>
        </div> */}

    </div>
  )
}

export default Downloads