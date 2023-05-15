import React, { useState } from 'react'
import '../style/payment.css'
import Logo from  '../images/Logo.png'
import book from  '../images/book.jpg'
import time from '../images/time.jpg'
import live from '../images/live.jpg'
import course from '../images/course.jpg'
import ads from '../images/ads.jpg'
import  search from '../images/search.png'
import  razor from '../images/razor.png'




const Payment = () => {
    let[total,setTotal]=useState(99)
    let[discount,setDiscount]=useState(18401)
  return (
   
    <div className='main'>
        <nav>
            <div className='nav-left'>
            <img src={Logo} alt='logo' />
                <select>
                <option>Courses</option>
                </select>
                <select>
                <option>Programs</option>
                </select>
            </div> 
            <div className='nav-right'>
            <img src={search} alt='logo' />

                <a href='/'>Log in</a>
                <button>JOIN NOW</button>
            </div>
        </nav>


        <section  >
            <div className='left'>
            <p>Access curated courses worth <span><i className='bx bx-rupee'></i></span> <strike style={{color:'red'}}><span style={{color:'white'}}>18,500</span></strike> at just <span><i class='bx bx-rupee' style={{color:'#1b5eb6'}}  >99</i></span> per year!</p>
            <div>
            <h5><img src={book} alt='book' /><span style={{color:'#1b5eb6'}}>100+ </span>Job relevant courses</h5>
            <h5><img src={time} alt='book' /><span style={{color:'#1b5eb6'}}>20,000+ </span>Hours of content</h5>
            <h5><img src={live} alt='book' /><span style={{color:'#1b5eb6'}}>Exclusive </span>webinar access</h5>
            <h5><img src={course} alt='book' />Scholarship worth <span style={{color:'#1b5eb6'}}><i class='bx bx-rupee' style={{color:'#1b5eb6'}}  ></i>94500</span> </h5>
            <h5><img src={ads} alt='book' /><span style={{color:'#1b5eb6'}}>Ad Free </span>learning experience</h5>
            </div>
            </div>
             
            <div className='right'>
            <div className='sign-up d-flex justify-content-around'>
            <a href='/'> <h5>1</h5> <p  >SignUp</p></a>
            <a href='/'> <h5>2</h5> <p>subscribe</p></a>
            </div>
            <h3>Select your subscription plan</h3>
         <form>
         <div className='first-field' >
         <fieldset >
            <legend align="left" >offer expired  </legend>
            <div className='check d-flex align-item-center justify-content-around'>
            <div className='box d-flex align-item-center'>
            <input type='checkbox' checked  />
            <label>12 Months Subscription</label>
            </div>
            <div className=''>
                <span>Total</span><i class='bx bx-rupee' style={{color:'#bebebe'}}  >99</i>
                <p><i class='bx bx-rupee' style={{color:'#bebebe'}}  >8  /mon  </i></p>
            </div>
            </div>  
           </fieldset>
           </div>
            <div className='second-field' onClick={()=>{setTotal(179);setDiscount(18321)}} >
           <fieldset >
            <legend align="left" >Recommended  </legend>
            <div className='check d-flex align-item-center justify-content-around'>
            <div className='box d-flex align-item-center'>
            <input type='checkbox'   />
            <label>12 Months Subscription</label>
            </div>
            <div className=''>
                <span>Total</span><i class='bx bx-rupee' style={{color:'black'}}  ></i>179
                <p><i class='bx bx-rupee' style={{color:'black'}}  >15  <c>/mon</c>  </i></p>
            </div>
            </div>  
           </fieldset>
           </div>
           
           <div  className='third-field'onClick={()=>{setTotal(149);setDiscount(18351)}} >
           <fieldset>
           
            <div className='check d-flex align-item-center justify-content-around'>
            <div className='box d-flex align-item-center mt-2'>
            <input type='checkbox'   />
            <label>6 Months Subscription</label>
            </div>
            <div className=''>
                <span>Total</span><i class='bx bx-rupee' style={{color:'black'}}  ></i>149
                <p><i class='bx bx-rupee' style={{color:'black'}}  >25  <c>/mon</c> </i></p>
            </div>
            </div>  
           </fieldset>
           </div>

           <div className='forth-field' onClick={()=>{setTotal(99);setDiscount(18401)}} >
           <fieldset >
            
            <div className='check d-flex align-item-center justify-content-around'>
            <div className='box d-flex align-item-center mt-2'>
            <input type='checkbox'   />
            <label>3 Months Subscription</label>
            </div>
            <div className=''>
                <span>Total</span><i class='bx bx-rupee' style={{color:'black'}}  >99</i>
                <p><i class='bx bx-rupee' style={{color:'black'}}  >33  <c>/mon</c>  </i></p>
            </div>
            </div>  
           </fieldset>
           </div>
         </form>
         <hr></hr>
         <div className='ss d-flex justify-content-around'>
            <h6>Subscription Fee</h6>
            <b><i class='bx bx-rupee' style={{color:'black'}}>18,500  </i></b>
         </div>
         <div className='fifth-field'>
           <fieldset  className='bc' >
            
           
            <div className='box-1 d-flex justify-content-between align-item-center'>
        
            <div className='cc'>
            <label>Limited time offer</label>
            <span></span> <p><i class='bx bx-time-five' style={{color:'#de4313',fontSize:"20px"}}  ></i>offer valid till 25th march 2023</p>
            </div>
            <div>
                <h6> <i className='bx bx-rupee ' style={{color:'black'}}>  </i>-{discount}</h6>
            </div>
            </div>
           
              
           </fieldset>
           </div>
           <div className='dd d-flex justify-content-around'>
          <p><b>Total</b>(Incl. of 18% GST)</p>
          <h5><i class='bx bx-rupee' style={{color:'black'}}>  </i>{total}</h5>
          </div>
          <div className='btn d-flex justify-content-around'>
            <button className='one'>CANCEL</button>
            <button className='two'>PROCEED TO PAY</button>
            
          </div>
          <img src={razor} alt='logo' className='raz'/>
            </div>
            
          
        </section>
  
    </div>
  )
}

export default Payment

