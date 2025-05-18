import React from 'react';
import CountdownTimer from './CountdownTimer';
import './HeroSection.css';
import { getByPlaceholderText } from '@testing-library/dom';

const HeroSection = () => {
  return (   
     <div className="mathsOlympiad">
      <header className='header'>
        <div className='top-bar'> <img src='logo 1.png' className='logo'></img><span>Exam in <strong>58 Days!</strong></span>      <botton className="top-bar-btn">Register Now </botton>  
          <botton className='top-bar-2btn'>Download App</botton></div>
      </header>
                         <div className="full-pg-bg">
                           
                           <div className="text-section"  >
                           <h2>Your Child Could Be India’s Next Maths Star<br />With a Free Trip to London!</h2>
                           <button className="enroll-btn">Enroll Now</button>
                           </div>
                           <div>
                            
                           <span className="countdowntimer"></span><img src='orange-tri.svg'/>
                            < CountdownTimer targetDate="2025-07-15" />
                           </div>
                         </div>
                      
                     <section className="container" className="info-boxx">
                        <div className='highlight-blue'><strong><p>India’s Biggest Online</p>
                        <p> Maths Olympiad for</p><p> Classes 2 to 6</p></strong>
                         </div>
                         <div className='highlight-blue'>
                          <p>Conducted by: SuperC</p>
                         <p>Exam Date:</p>
                         <p><strong>15th July 2025 </strong></p>
                         </div> 
                     <div> 
                      <button className="download-btn">Download SuperC App for Daily Prep</button>
                     </div>
                        
                     
                      
                    </section>
        
                 <div className='information-section'>
                       <div>
                      
                        <p>
                           Join the most exciting <span className="highlight-orange">National Maths Olympiad 2025</span>
                            an <strong>online mathematics compitation</strong> 
                            for <strong>class 2 to class 6</strong> students across India.Designed by esperts and loved by thousands of parents,
                            the <span className='highlight-orange'>SuperC Olympiad</span> helps kids sharpen logic, bulid confidence, and get
                           rewarded with global exposure.
                       </p>
                    
                </div>   
               </div> 
               <section className='participate-section'  >
                
                  <img src='/girlBook.png' className='girlBook'/><img src='vedio.svg'/>
                     <div>
                  <h2><p><strong>How to Participate & Win <br/>Watch in <span className='highlight-blue'>60 Seconds!</span></strong></p></h2>
                  <ol className='steps-section'>
                      <li>Register on this page</li>
                      <li>Download the SuperC App/ Visit our Youtube Channel</li>
                      <li>Prepare Daily with Quizzes and videos</li>
                      <li>Take the exam from home on 15th July</li>
                      <li>Top scorer wins a London Trip for student + parents</li>
                    </ol>
                    <button className='challenge-btn'>Join the Challenge</button>
                    </div> </section>
                    <section>
                    <div >
                    <div className='info-boxes' >
                    <div className='info-box'><img src='examDate.svg'/><strong>Exam Date:</strong><br/>15 July 2025</div>
                    <div className='info-box'><img src='desktop.svg'/>2nd to 6th Grade</div>
                    <div className='info-box'> <img src='trophy.svg'/>Trip to Landon
                    </div>  </div></div></section>

                    <section className='about-sections' >
                      <div  >
                         <h2 className='about-text'><p>What is the  <span className='highlight-blue'>SuperC</span></p> 
                        <p><span className='highlight-blue'>National Maths Olympiad?</span></p></h2>
                        <div> <p>SuperC Olympiad is a national-level online maths competitation </p>
                          <p>desigen for children from classes 2 to 6. It fosters problem solving,</p>
                          <p>logical thinking,and fun learning - all from the comfort of home</p>
                       
                         
                           <p><img src='desktop2.svg'></img>Conducted fully online</p>
                           <p><img src='pages.svg'/>45-minutes MCQ-based test</p>
                          <p><img src='certificate.svg'/>Instant results + e-certificates</p></div>
                         
                         
                        <div><img  className='form' src='app 1.png' alt="app"></img></div>
                       
                       </div> 
                      
                       
                       
                      
                    </section>
                    <div>
                    <section className='syllabus-section'> 
                      <div>
                      <h2>Olympiad <span className='highlight-blue'>Structure & Syllabus Overview</span></h2>
                      <p className='syllabus-tags' ><span  className='highlight-blue'>30 Questions | 45 Minutes | No Negative Marking | Online Test Platform</span> </p> </div>
                       <p className='syllabus-heading'><strong>Syllabus Breakdown:</strong></p>
                      
                      <div>
                      <table className='syllabus-table' >
                        <thead  >
                          <tr > 
                            <th >Class</th>
                            <th >Section</th>
                            <th >Topics Covered</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2nd</td>
                            <td>Arithmetic,Reasoning</td>
                           <p className='highlight-orangered'>Advanced Arithmetic</p> 
                          </tr>
                          <tr>
                            <td>3rd</td>
                            <td>Numbers,Shapes,Time</td>
                            Percentages
                          </tr>
                          <tr>
                            <td>4th</td>
                            <td>Fractions,Reasoning</td>
                                 Logic
                          </tr>
                          <tr>
                            <td>5th</td>
                            <td>Algebra,Geometry</td>
                            Graph
                          </tr>
                          <tr>
                            <td>6th</td>
                            <td>Advanced Arithmetic</td>
                            Mental Maths
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </section>
                    </div>
                    <section className='appAndWeb-section' >
                      <img  className='app-img' src='vector-8.svg' alt="phone-pic"></img>
                      <div className='style-topText'>
                        <h2>Get Olympiad-Ready with   <span className='highlight-blue'>SuperC App & Web!</span></h2>
                        <h1>SuperC App:</h1>
                        <ul >
                          <img src='Vector-7.svg'></img>
                          <li>Daily quizzes & practice questions</li>
                          <li>Leaderboards to stay competitive</li>
                        </ul>
                        
                          <button  className='download-btn'>Download App</button>
                        
                        <div>
                          <h1>Website:</h1>
                           <ul className='image'>
                            <img src='web-icon.svg'></img>
                          <li>Topics-wise practice sets </li>
                          <li>Smart tricks & revision hacks</li>
                        </ul>
                        <button  className='download-btn'>Visit Now</button></div>
                       
                      </div>
                    </section>
                    <section  className='container-1' className='incentive-section'>
                       <img src='gift.svg'></img>
                      <h2>App Download <span className='highlight-blue'>Incentive</span></h2>
                      <button className='download-btn'>Claim Free Tests Now</button>

                    </section>
                    <section >
                      
                        <h2 className='Previous-Winners'>Previous Winners <span className='highlight-one'>Who Made It Big!</span></h2>
                        <div className='winners'>
                          <img src="winner1.jpg" alt='Aarav Mehta'></img>
                           <p>Name:Aarav Mehta <br/>Class:5th</p>
                        
                          <img src='winner2.png' alt=' Diya Sharma'></img>
                             <blockquot>"a fun learning experience; she looked forward to practice every day!</blockquot>
                          <p>Name:Diya Sharma <br/>Class:4th</p>
                       <img src='winner3.jpg' alt='Vivaan Patel'></img>
                          <p>Name:Vivaan Patel <br/>Class:2nd</p>
                          
                        </div>
                      
                     
                      
                    </section>
                    <section className='stats-section'>
                      <div>
                         <h1>Trusted By <span className='highlight-blue'>Thousands</span></h1>
                      <div className='stats'>
                        <div className='highlight-blue'><strong> 50,000+</strong><br/><strong>Students </strong> Across India</div>
                        <div  className='highlight-blue'><strong>4.8+</strong><br/><strong>Rated 4.8+ </strong>on App Store & Play Store</div>
                        <div  className='highlight-blue'><strong>50K+</strong><br/> <strong>Trusted by Parents</strong></div>

                      </div>
                      
                      <p className='award'> <img src='IIM.png'/><strong>Best Startup Award By IIM Sambhalpur |Safe & Secure |Trusted by 50K+ Parents</strong></p></div>
                     
                    </section>
                    
                      <section  >
                          <h2 className='testimonials-section'>Testimonials</h2> 
                          <div className='testimonials-img'>  
                            <img src='arrow 3.svg'/>
                             <img src='parent1.png' alt='parent'/>
                             <img src='doublecoatIcon.svg'/>
                             <p>"My daughter loved the daily quizzes!"<br/><small>-- Mrs.Mehta(Parent, Class 4)</small></p>
                          
                         
                            <img src='testmonial2.png'/>
                            <img src='doublecoatIcon.svg'/>
                            <p>"I practiced every day and improve my math."<br/><small>-- Aryan, Class 5</small></p>
                            <img src='arrow 4.svg'/>
                          </div>
                          
                            
                          
                            
                      </section>
                    
                   <section className='faq-section'>
                      <h2>Frequently Asked <span className='highlight-blue'>Questions</span></h2>
                      <div className='faq-items'>
                        
                        <p><img src='questionmark.svg'/><strong>Is the exam online?</strong></p>
                       
                        <p> <img src='Done.svg'/>Yes, students can take the test from home on any smartphones/tablet.</p>
                      </div>
                      <div className='faq-items'>
                        
                        <p><img src='questionmark.svg'/><strong>Is registrations free?</strong></p>
                        
                        <p> <img src='Done.svg'/>Registrations are now only at 299/- with free unlimited practice sets.</p>
                      </div>
                      <div className='faq-items'>
                        
                        <p><img src='questionmark.svg'/><strong>What is the syllabus based on?</strong></p>
                        
                        <p> <img src='Done.svg'/>it aligns with school curriculum and Olympiad-level logical &reasoning.</p>
                      </div>
                      <div className='faq-items'>
                         
                        <p><img src='questionmark.svg'/><strong>How is the winner selected?</strong></p>
                       
                        <p> <img src='Done.svg'/>The top scorer across India wins the London trip.</p>
                      </div>
                    </section>*/
                    <section className='cta-section' >
                      <h2 className='highlight-light-blue' >Don't Let Your Child Miss This Once-in-a-Lifetime Opportunity!</h2>
                      <p className='highlight-light-blue'>Register Now-> Prepare Daily --> Score High --> Travel to London with Your Child!</p>
                     </section>

                     <section>
                      <div className='cta-buttons'> 
                        <button className='cta-button' >Download App </button>
                        <button className='cta-button' > Register Now</button>
                      </div>
                    </section>
  </div>

      
    
    
  );
};

export default HeroSection;