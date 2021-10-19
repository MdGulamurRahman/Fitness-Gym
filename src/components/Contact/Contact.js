import React from 'react'
import './Contact.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhone, faLink, faUserTie} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth';
const containerStyle = {
  width: '600px',
  height: '400px'
};

const position = {
  lat: 22.356852,
  lng: 91.783180
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }
  

function Contact() {
  const {registerHandler, getEmail, getPassword, getPhoto, getName, getNumber} = useAuth()

  return (
    <div className="pb-5 overflow-hidden contact">
      <h1 className="py-5 text-center text-light"><span className="coffee">CONTACT</span> US</h1>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 map-area">
            <LoadScript
                  googleMapsApiKey="AIzaSyAWx53Rxpz50LBWhHjJmBTGJRvH11Z0Ya4"
                >
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={10}
                  >
                    <Marker
                  onLoad={onLoad}
                  position={position}
                />
                  </GoogleMap>
            </LoadScript>
          </div>
          <div className="form-area col-sm-12 col-md-6 col-lg-6">
            <form onSubmit={registerHandler}>
                <div className="mb-3 row">
                  <label for="name" className="col-sm-2 col-form-label"></label>
                  <div className="input-icon col-sm-10 d-flex align-items-center">
                    <h3 className="coffee me-2"><FontAwesomeIcon icon={faUserTie} /></h3>
                    <input onBlur={getName} type="name" className="form-control bg-input" id="name" placeholder="name"/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label"></label>
                  <div className="input-icon col-sm-10 d-flex align-items-center">
                  <h3 className="coffee me-2"><FontAwesomeIcon icon={faEnvelope} /></h3>
                    <input onBlur={getEmail} type="email" className="form-control bg-input" id="inputEmail3" placeholder="email"/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="inputPassword3" className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-10 input-icon d-flex align-items-center">
                  <h3 className="coffee me-2"><FontAwesomeIcon icon={faLock} /></h3>
                    <input onBlur={getPassword} type="password" className="form-control bg-input" id="inputPassword3" placeholder="password"/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="number" className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-10 input-icon d-flex align-items-center">
                  <h3 className="coffee me-2"><FontAwesomeIcon icon={faPhone} /></h3>
                    <input onBlur={getNumber} type="number" className="form-control bg-input" id="number" placeholder="number"/>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="photoUrl" className="col-sm-2 col-form-label"></label>
                  <div className="col-sm-10 input-icon d-flex align-items-center">
                  <h3 className="coffee me-2"><FontAwesomeIcon icon={faLink} /></h3>
                    <input onBlur={getPhoto} type="text" className="form-control bg-input" id="photoUrl" placeholder="PhotoURL"/>
                  </div>
                </div>
                <button type="contact" className="contact-btn">Contact Now</button>
              </form>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default React.memo(Contact)

