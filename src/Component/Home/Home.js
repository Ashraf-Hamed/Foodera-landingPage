import React, { Fragment } from 'react'
import Header from '../Header/header'
import './Home.css'
import AboutImg from "../../assets/1.png"
import ingredientsImg from "../../assets/2.png"
import { Button ,Card , Carousel} from 'react-bootstrap'
import Data from '../../data' ;
import Testimonialimg1 from "../../assets/1 (1).jpg"
import Testimonialimg2 from "../../assets/2.jpg"
import Testimonialimg3 from "../../assets/avatar-05.png"




const  Home = ()  => {

  const blogItem = Data.map((item) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 box">
      <Card className='card' >
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
       <h2 className='title'> {item.title}</h2>
        <span>{item.time}</span>
        <Card.Text>
         <h2 className='price'> {item.price}  <del>$15.70</del> </h2>
        </Card.Text>
        <Button variant="primary" className='btn'>Order Now</Button>
      </Card.Body>
    </Card>
      </div>
    )
  })

  return (
    <Fragment>
    <Header />
     <section className='dashboard'>
        <div className="container">
          <div className="row">
              <div className="col-lg-3 col-md-6">
                 <h2>1287+</h2>
                 <p>SAVINGS</p>
              </div>
              <div className="col-lg-3 col-md-6">
              <h2>5786+</h2>
              <p>PHOTOS</p>
           </div>
           <div className="col-lg-3 col-md-6">
           <h2>1440+</h2>
           <p>ROCKETS</p>
        </div>
        <div className="col-lg-3 col-md-6">
        <h2>7110+</h2>
        <p>GLOBES</p>
     </div>
          </div>
        </div>
     </section>

     <section className="about" id='about'>

      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 image">
              <img src= {AboutImg} alt="aboutImg" />
          </div>
          <div className="col-lg-5 col-md-6  col-sm-12 about-content">
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <Button className='btn'>Learn More</Button>
          </div>
        </div>
      </div>
     </section>

     <section className='ingredients'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ">
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                <ul className='lists'>
                  <li><i class='bx bx-check'></i> Etiam sed dolor ac diam volutpat.</li>
                  <li><i class='bx bx-check'></i> Erat volutpat aliquet imperdiet.</li>
                  <li><i class='bx bx-check'></i> purus a odio finibus bibendum.</li>
                </ul>
                <Button className='btn'>Learn More</Button>
            </div>
            <div className="col-lg-7 ">
                <img src= {ingredientsImg} alt="ingredientsImg" />
            </div>
          </div>
        </div>
     </section>

     <section className="story">
          <div className="container">
                <div className="row">
                
                  <div className="col-lg-12 col-md-12">
                      <h1>When a man's stomach is full it makes no
                      difference whether he is rich or poor.</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
                      finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                      </p>

                     <a href="#"> <i class='bx bx-play' ></i>Watch Our Story</a>
                      
                      </div>

                  </div>
          </div>
  
     </section>

    
     <section className="explore" id='explore'>
        <div className="head">
        <h1>Explore Our Foods</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p></div>

        <div className="container">
          <div className="row">
              
              {blogItem}
              
          </div>
        </div>
     </section>

     <section className="Testimonials" id='review'>
        <h1>Testimonials</h1>
      <div className="container">
      
          <div className="row">
                <div className="col-lg-12 col-md-12">
                    <Carousel slide>
                        <Carousel.Item>
                          <img
                            src={Testimonialimg1}
                          />
                          <Carousel.Caption>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere qui necessitatibus a voluptates autem, enim sint aliquam quo aperiam incidunt, libero expedita quos eos est?</h3>
                            <span>Nulla vitae .</span>
                          </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                          src= {Testimonialimg2}
                          />

                          <Carousel.Caption>
                          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere qui necessitatibus a voluptates autem, enim sint aliquam quo aperiam incidunt, libero expedita quos eos est?</h3>
                          <span>Nulla vitae .</span>
                          </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                        src= {Testimonialimg3}
                          />

                          <Carousel.Caption>
                          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere qui necessitatibus a voluptates autem, enim sint aliquam quo aperiam incidunt, libero expedita quos eos est?</h3>
                          <span>Nulla vitae .</span>
                          </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
                </div>
          </div>
      </div>
     </section>


     <section className="Question" id='faq'>

        <h1>Frequently Asked Questions</h1>

        <div className="container">
            <div className="row">
                <div className="col-md-6  col-sm-12">
                     <div className="top">
                     <h2> <span>~</span> Is Foodera Bread really baked fresh each day?</h2>
                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                     </div>
                     <div className="bottom">
                     <h2> <span>~</span> Is Foodera Bread really baked fresh each day?</h2>
                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                     </div>
               </div>

                <div className="col-md-6  col-sm-12">
                <div className="top">
                <h2> <span>~</span> Is Foodera Bread really baked fresh each day?</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className="bottom">
                <h2> <span>~</span> Is Foodera Bread really baked fresh each day?</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                </div>
            </div>
        </div>

     </section>


     <section className='passion'>
     
        <div className="container">
        <div className="overlay"></div>
            <div className="row">
              <div className="col-md-8">
                  <h2>
                  Baked fresh daily by bakers with passion.</h2>
              </div>
              <div className="col-md-4">
              <button className='btn'>Learn More</button>
          </div>
            </div>
        </div>
        
     </section>


<section className="Subscribe">

      <div className="container">
          <h1>Hurry up! Subscribe our newsletter <br/>
          and get 25% Off</h1>

          <p>Limited time offer for this month. No credit card required.</p>

        <form >
        <input type="email" placeholder='Email Addresses here'/>
        <button className='subcribe'>Subcribe</button>
        </form>
      
      </div>
</section>



<section className="footer">

    <div className="container">
    
        <ul className=''>
          <li><a href="#">Register</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Affilliate</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        <div className="social">

        <i class='bx bxl-facebook'></i>
        <i class='bx bxl-twitter' ></i>
        <i class='bx bxl-instagram' ></i>
        <i class='bx bxl-linkedin'></i>
        <i class='bx bxl-youtube' ></i>
        </div>

        <p>© 2023. AshrafHamed. All rights reserved.</p>
    </div>
</section>


    </Fragment>
  )
}


export default Home 