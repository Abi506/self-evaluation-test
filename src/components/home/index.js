import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegLightbulb } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";
import Header from '../header/index';


import './index.css'

class Home extends Component {
    state = { data: [] };

    render() {
        return (
            <>
            <Header />
            <div className='home-container'>
               <div className='row form-row'>
                <div className='col-md-6 col-12'>
                    <h1>Become ACCA in 18 months</h1>
                    <br/>
                    <h3>Achieve Your Dream Package</h3>
                    <ul className='list-styles'>
                        <li className='common-lists'>
                            <h3>AI/ML</h3></li>
                        <li className='common-lists'>
                            <h3>Reviews</h3>
                            <p>212,923</p>
                        </li>
                        <li className='common-lists'>
                            <h3>Offer Ends</h3>
                            <p>10:27</p>
                        </li>
                    </ul>
                    <div className='book-container'>
                    <button type="button" className='booking-contianer'>Book Now</button>
                    <button type="button" className='call-back-container'>Request Call Back</button>

                    </div>
                </div>
                <div className='col-md-3 col-12 form-container'>
                <form className='form-sub-container'>
                    <h1>Apply Today</h1>
                    <input type="text" placeholder='Phone Number' className='form-input' />
                    <br/>
                    <input type="text" placeholder='Email Id' className='form-input' />
                    <br/>
                    <input type="text" placeholder='Full Name' className='form-input' />
                    <br/>
                    <input type="text" placeholder='Address' className='form-input' />
                    <div className='submit-container-button'>
                        <button type="button" className='submit-button'>Submit</button>
                    </div>
                    
                </form>
                </div>
                </div> 
                
                <div className='choose-us-container row'>
                    <h1>WHy Choose Us</h1>
                    <div className='card-container-parent'>
                    <div className='card-container'>
                        <FaRegLightbulb className='card-icons'/>
                        <h1>Expert Faculty</h1>
                        <p>Our Faculty are world class experts</p>
                    </div>
                    <div className='card-container'>
                        <FaUserGroup className='card-icons'/>
                        <h1>Achieve Your Dream Package</h1>
                        <p>More than 1000 students secured 12Lpa </p>
                    </div>
                    <div className='card-container'>
                        <FaSuitcase className='card-icons'/>
                        <h1>Placements</h1>
                        <p>More than 1700 Companies hired from us</p>
                    </div>
                    </div>
                    </div>
                    <div className='small-card-container col-12'>
                        <ul className='unordered-list-container'>
                            <li className='small-card'>
                                <h1>Levels</h1>
                                <p>13 levels</p>
                            </li>
                            <li className='small-card'>
                                <h1>Duration</h1>
                                <p>6-10 Months</p>
                            </li>
                            <li className='small-card'>
                                <h1>Exams</h1>
                                <p>Quaterly (online)</p>
                            </li>
                            <li className='small-card'>
                                <h1>Exemptions</h1>
                                <p>Upto 9 Papers</p>
                            </li>
                        </ul>
                    </div>

                    <div className='choose-us-container row'>
                    <h1>WHy Choose Us</h1>
                    <div className='card-container-parent'>
                    <div className='card-container'>
                        
                        <h1>Knowledge Level</h1>
                        <ul>
                            <li>Business and Technology</li>
                            <li>Administration Management</li>
                            <li>Financial Management</li>
                        </ul>
                    </div>
                    <div className='card-container'>
                       
                        <h1>Skill Level</h1>
                        <ul>
                        <li>Machine Learning </li>
                        <li>Artificial Intelligence</li>
                        <li>Data Science</li>
                        </ul>

                    </div>
                    <div className='card-container'>
                        
                        <h1>Professional Level</h1>
                        <ul>
                            <li>Advanced Financial Management</li>
                            <li>Advanced Intelligence</li>
                            <li>ADvance Autonomous Robot</li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className='placement-container'>
                    <h1 className='main-placement-heading'>100% Placement Assistance</h1>
                    <div className='sep-container'>
                    <hr className='separator'/>
                    </div>
                    <h2>Resume Building </h2>
                    <p>We with our professional provides excellent placement Support</p>
                    <h2>Carrer Counselling</h2>
                    <p>We provide the carrer guidance through the student</p>
                    <h2>Jobs</h2>
                    <p>More than 1700 companies hired out students</p>

                </div>

                <div className='row form-row'>
                <div className='col-md-6 col-12'>
                    <h1>Kick Of your ACCA Prep Journey With Us</h1>
                    <p>Sign in and get instant access to our free courses</p>
                    <br/>
                    
                    <div className='book-container'>
                    <button type="button" className='booking-contianer'>Book Now</button>

                    </div>
                </div>
                <div className='col-md-3 col-12 form-container'>
                <form className='form-sub-container'>
                    <h1>Apply Today</h1>
                    <input type="text" placeholder='Phone Number' className='form-input' />
                    <br/>
                    <input type="text" placeholder='Email Id' className='form-input' />
                    <br/>
                    <input type="text" placeholder='Full Name' className='form-input' />
                    <br/>
                    <input type="text" placeholder='Address' className='form-input' />
                    <div className='submit-container-button'>
                        <button type="button" className='submit-button'>Submit</button>
                    </div>
                    
                </form>
                </div>
                </div> 

                



            </div>
            </>
        );
    }
}

export default Home;
