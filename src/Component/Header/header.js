import React, { Fragment } from 'react'
import {Button} from 'react-bootstrap';
import "./header.css"

const  Header = () => {
  return (
    <Fragment>
    <div className="header" id='home'>
          <div className="container">
                <div className="row">
                    <div className="col-md-6 content">
                      <h2>Good food choices are good investments.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                      <Button className='btn active'>order Now 
                        
                      <i class='bx bx-shopping-bag'></i>
                    
                      </Button>
                      <Button className='btn default'>Learn More <i class='bx bx-chevron-right'></i></Button>

                    </div>
                    <div className="col-md"></div>
                </div>
          </div>
          </div>
    </Fragment>
  )
}

export default Header
