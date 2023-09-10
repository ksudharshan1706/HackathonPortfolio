import React from 'react'
import "./aboutme.css"
import Footer from '../footer/Footer'
import Container from 'react-bootstrap/Container';
import DownloadIcon from '@mui/icons-material/Download';
// import "../../assets/resume/SUDHARSHAN_KAMAVARAM_RESUME.pdf"
const AboutMe = () => {
  return (
    <div className='main1'>
    <Container style={{backgroundColor:"#133E4D",}}>
        <div className='Aboutme'>
            <div > 
                <img style={{height:"70%",width:"50%",objectFit:"cover",borderRadius: "50%"}} src='https://i.ibb.co/3mS24Zy/1694313943864.jpg' alt='sudharshan'/>            
                <br/>
                <br/>
                <h5>Sudharshan Kamavaram</h5>
                {/* <DownloadIcon /> */}
                {/* <button className="button">
                <DownloadIcon />
                    <a className="button" href="../../assets/resume/SUDHARSHAN_KAMAVARAM_RESUME.pdf" download = "SUDHARSHAN_KAMAVARAM_RESUME.pdf">
                      Download Resume
                    </a>
                </button> */}
            </div>
            <div style={{width:"90%"}} >
              <h5>Hard-working full-stack developer with Experience and proficiency in backend Development and implementation using C# and python and also a Novice full-stack developer with experience on Node.js, HTML5, CSS, React, Myql, MSSQL and JavaScript</h5>
              <br/>
              <div><h5>I am a dedicated and innovative software engineer with a proven track record of delivering excellence in the field. Currently, I'm engaged as a Software Engineer at Taxilla IT Solutions Pvt Ltd, where I've had the privilege of collaborating on critical projects. My primary focus has been on partnering with Black Knight Financial Services, a renowned American corporation in the mortgage and real estate industries, to consolidate and transform complex data from diverse sources into a standardized positional data file format called LAN_2_3.</h5></div>
              <br/>
              <p><h5>In addition to this challenging role, over the past year, I've ventured into exciting full-stack projects. I've contributed my expertise to the creation of diverse applications, each with its unique set of challenges and opportunities which you will be able to find in the projects section</h5></p>
            </div>
            <br/>

        </div>
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