import React from 'react'
import "./aboutme.css"
import Footer from '../footer/Footer'
import Container from 'react-bootstrap/Container';
// import "../../assets/resume/SUDHARSHAN_KAMAVARAM_RESUME.pdf"
const AboutMe = () => {
  return (
    <div className='main1'>
    <Container >
        <div className='Aboutme'>
            <div> 
                <img style={{height:"100%",width:"50%",objectFit:"cover",borderRadius: "50%"}} src='https://i.ibb.co/y4jXySF/mydp.jpg' alt='sudharshan'/>            
            </div>
            <div style={{width:"80%"}} >
              <div>I am a dedicated and innovative software engineer with a proven track record of delivering excellence in the field. Currently, I'm engaged as a Software Engineer at Taxilla IT Solutions Pvt Ltd, where I've had the privilege of collaborating on critical projects. My primary focus has been on partnering with Black Knight Financial Services, a renowned American corporation in the mortgage and real estate industries, to consolidate and transform complex data from diverse sources into a standardized positional data file format called LAN_2_3.</div>
              <p>In addition to this challenging role, over the past year, I've ventured into exciting full-stack projects. I've contributed my expertise to the creation of diverse applications, each with its unique set of challenges and opportunities which you will be able to find in the projects section</p>
            </div>
        </div>
        {/* <br/>
        <br/> */}
        <br/>
        <br/>
        <br/>
        <>
          <Footer/>
        </>
  </Container>
  </div>
  )
}

export default AboutMe