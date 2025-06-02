import React from 'react';
import CountdownTimer from './CountdownTimer';
import './HeroSection.css';


const HeroSection = () => {
  return (   
     <div className="mathsOlympiad">
      
        <div className='top-bar'>
          <header className='header'>
            <img src ="red-arrow.png  "  alt="img" ></img><span>  Exam in <span><strong>< CountdownTimer targetDate="2025-07-15" /> Days Left !</strong></span></span>  
          <botton className="top-bar-btn"><img src='page-vector.png' alt="img" />Register Now </botton>  
          <botton className='top-bar-2btn'><img src='download-vector.png' alt="img"/>Download App</botton>
          </header>
                      </div>
                       
                         <div className="full-pg-bg">
                           <img src='logo 1.png' className='logo'  alt="img"></img>
                            <div className="text-section"  >
                               <p>Your Child Could Be <br/> India’s Next Maths Star<br />With a Free Trip to London!<br/>
                               <button className="enroll-btn">Enroll Now</button></p>
                            </div>
                                <span className='orange'>⏳
                                <CountdownTimer targetDate="2025-07-15" /> Days Left</span> 
                       </div>
                      
                     <section  className="info-boxx">
                        <div className='highlight-blue' ><strong><p>India’s Biggest Online<br />
                           Maths Olympiad for <br />
                           Classes 2 to 6</p></strong>
                         </div>
                         <div className='highlight-blue'>
                          <p>Conducted by: SuperC<br />
                         Exam Date:<br/>
                         <strong>15th July 2025 </strong></p>
                         </div> 
                     <div> 
                      <button className="download-btn">Download SuperC App for Daily Prep</button>
                     </div>
                        
                     
                      
                    </section>
        
                 <div className='information-section'>
                       <div>
                      
                        <p className='highlight-blue'>
                           Join the most exciting <span className="highlight-orange">National Maths Olympiad 2025</span>
                            an <strong>online mathematics compitation</strong> 
                            for <br /> <strong>class 2 to class 6</strong> students across India.Designed by esperts and loved by thousands of parents,
                            the<br /> <span className='highlight-orange'>SuperC Olympiad</span> helps kids sharpen logic, bulid confidence, and get
                            <br />rewarded with global exposure.
                       </p>
                    
                </div>   
               </div> 
               <section className='participate-section'  >
                       
                  
                    <div className='vedio'> 
                        <img src='vedio.svg' alt="vedio img"/>
                        <p>How to Participate <br/>& Win Watch in <br/>60 Seconds!</p>
                       </div>
                      
                     <div>
                       
                  <h2><p><strong>How to Participate & Win <br/>Watch in <span className='highlight-lightBlue'>60 Seconds!</span></strong></p></h2>
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
                            <div className='info-box'><img src='examDate.svg'  alt="img" /> Exam Date: <br/>  15 July 2025</div>
                            <div className='info-box'><img src='desktop.svg'  alt="img" /> 2nd to 6th Grade</div>
                            <div className='info-box'> <img src='trophy.svg'  alt="img" /> Trip to Landon</div> 
                         </div>
                     </div>
                     </section>

                    <section className='about-sections' >
                      <div  >
                         <h2 className='about-text'><p>What is the  <span className='highlight-lightBlue'>SuperC <br />
                           National Maths Olympiad?</span></p></h2>
                        <p className='about-text1'>SuperC Olympiad is a national-level online maths competitation <br/>
                          desigen for children from classes 2 to 6. It fosters problem solving,<br/>
                          logical thinking,and fun learning - all from the comfort of home</p>
                       
                         
                           <p className='about-text2'><img src='desktop2.svg'  alt="img" ></img>  Conducted fully online</p>
                           <p className='about-text2'><img src='pages.svg'  alt="img" /> 45-minutes MCQ-based test</p>
                         <p className='about-text2'> <img src='certificate.svg '  alt="img" />  Instant results + e-certificates</p></div>
                         
                         
                        <div><img  className='form' src='app 1.png' alt="app"></img></div>
                       
                       
                      
                       
                       
                      
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
                        <h2>Get Olympiad-Ready with <br/>  <span className='highlight-blue'>SuperC App & Web!</span></h2>
                        <h1>SuperC App:</h1>
                        <ul >
                          <img src='Vector-7.svg'  alt="img"></img>
                          <li>Daily quizzes & practice questions</li>
                          <li>Leaderboards to stay competitive</li>
                        </ul>
                        <ul><button  className='download-btn'>Download App</button></ul>
                          
                        
                        <div>
                          <h1>Website:</h1>
                           <ul className='image' >
                            <img src='web-icon.svg '  alt="img" ></img>
                          <li>Topics-wise practice sets </li>
                          <li>Smart tricks & revision hacks</li>
                        </ul>
                       <ul> <button  className='download-btn'>Visit Now</button></ul></div>
                       
                      </div>
                    </section>
                    <section   className='incentive-section'>
                       <img src='gift.svg'   alt="img"></img>
                      <h2>App Download <span className='highlight-blue'>Incentive</span></h2>
                      <button className='download-btn'>Claim Free Tests Now</button>

                    </section>
                    <section >
                      
                        <h2 className='Previous-Winners'>Previous Winners <span className='highlight-lightBlue'>Who Made It Big!</span></h2>
                        <div className='winners'>
                          <div className='winner1'> 
                            <div>
                               <p className='pink-vector'>Name:Aarav Mehta <br/>Class:5th</p>
                            </div>
                           
                          </div>
                          <div className='winner2'>
                             
                             <p>"A fun learning experience. <br/>she looked forward to<br/> practice every day!</p>
                             <div>
                             <p className='blue-vector'>Name:Diya Sharma <br/>Class:4th</p>
                             </div>
                          </div>
                          <div className='winner3'>
                            <div className='pink-vector'>
                            <p>Name:Vivaan Patel <br/>Class:2nd</p>
                            </div>
                          </div>
                        </div>
                    </section>
                    <section className='stats-section'>
                      <div>
                         <h1 className='highlight-blue'>Trusted By <span className='highlight-lightBlue'>Thousands</span></h1>
                      <div className='stats'>
                        <div className='highlight-blue'><strong  className='font-size'> 50,000+</strong><br/><strong>Students </strong> Across India</div>
                        <div  className='highlight-blue'><strong  className='font-size'>4.8+</strong><br/><strong>Rated 4.8+ </strong>on App Store & Play Store</div>
                        <div  className='highlight-blue'><strong  className='font-size'>50K+</strong><br/> <strong>Trusted by Parents</strong></div>

                      </div>
                      
                      <div><img  src='IIM.png' alt=" IIM" /> <strong className='highlight-grey'>  Best Startup Award By IIM Sambhalpur | Safe & Secure | Trusted by 50K+ Parents</strong></div></div>
                     
                    </section>
                    
                      <section  >
                          <h2 className='testimonials-section'>Testimonials</h2> 
                          
                          <div className='testimonials-img'>  <br/>
                           <div> <img src='arrow 3.svg' alt="RED ARROW" /></div>
                           <br/>
                             <img src='parent1.png' alt='parent'/> 
                            
                             <p> <img src='doublecoatIcon.svg' alt=" img" /><br/><strong>"My daughter <br/> loved the daily <br/> quizzes!"<br/></strong><small>-- Mrs.Mehta(Parent, Class 4)</small></p>
                          
                         
                            <img src='testmonial2.png'  alt="img" />
                            
                            <p><img src='doublecoatIcon.svg' alt="img" /><br/><strong>"I practiced every <br/>day and improved <br/> my math."</strong><br/><small>-- Aryan, Class 5</small></p>
                            <div><img src='arrow 4.svg'  alt="img"/></div>
                          </div>
                          
                            
                          
                            
                      </section>
                    
                  <section className='faq-section'>
                      <h2 className='font-size'>Frequently Asked <span className='highlight-blue'>Questions</span></h2>
                      <div className='faq-items'> 
                         <div  className="questions"  >
                             <div >
                              <img  src='questionmark.svg'  alt="img" /><strong>Is the exam online? </strong>
                             </div>
                             <div>
                               <img src='questionmark.svg'  alt="img" /><strong>Is registrations free? </strong>
                             </div>
                             <div >
                               <img  src='questionmark.svg'  alt="img" /><strong>What is the syllabus based on? </strong>
                             </div>
                             <div>
                               <img src='questionmark.svg'  alt="img" /><strong>How is the winner selected? </strong>
                             </div>
                             </div>
                        <div className='answers' >
                         <div >
                         <img  src='Done.svg'  alt="img" />Yes, students can take the test from home on any smartphones/tablet.
                        </div>
                        <div>
                         <img  className='border'src='Done.svg'  alt="img" />Registrations are now only at 299/- with free unlimited practice sets.
                  
                        </div>
                        <div>
                         <img  className='border'src='Done.svg'  alt="img" />it aligns with school curriculum and Olympiad-level logical &reasoning.
                        
                        </div>
                        <div  >
                        <img className='border'src='Done.svg'  alt="img" />The top scorer across India wins the London trip.
                        </div>
                       </div>
                      
                   </div>
                     
                    </section>



                    <section className='cta-section' >
                      <h2 className='highlight-light-blue' >Don't Let Your Child Miss This Once-in-a-Lifetime Opportunity!</h2>
                      <p className='highlight-light-blue'>Register Now-> Prepare Daily --> Score High --> Travel to London with Your Child!</p>
                     </section>

                     <section>
                      <div className='cta-buttons'> 
                        <footer>
                          <button className='cta-button' > Download App</button>
                          <button className='cta-button1' > Register Now</button>
                        </footer>
                        
                      </div>
                    </section>
  </div>

      
    
    
  );
};

export default HeroSection;