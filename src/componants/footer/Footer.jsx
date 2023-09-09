import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <MDBFooter  className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

        <section className=''>
          <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Address:</h5>

              <ul className='list-unstyled mb-0'>
                
                <li>
                  <a href='#!' className='text-white'>
                    
G-4, Daredia Sky Garden, Behind Cineplanet
Kompally,Hyderabad, TS 500014
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>PHONE</h5>

              <ul className='list-unstyled mb-0'>
                
                <li>
                  <a href='#!' className='text-white'>
                   
9515230251
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>EMAIL</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    kamavaramsudharshan1706@gmail.com
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>SOCIAL</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://github.com/ksudharshan1706' target='_blank' className='text-white'>
                    <GitHubIcon/>
                  </a>
                </li>
                <br/>
                <li>
                  <a href='https://www.linkedin.com/in/sudharshan-k-139747188/' target='_blank' className='text-white'>
                    <LinkedInIcon/>
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:{" "}
        <a className='text-white' href=''>
          sudharshan
        </a>
      </div>
    </MDBFooter>
  );
}