import React, { Component } from 'react';
import ContactImage from 'assets/003 - Contacto/header.jpg';
import styles from 'screens/ContactScreen/ContactScreenStyle';
import ContactForm from 'components/ContactForm/ContactForm';
import GoogleMapReact from 'google-map-react';

const SpotPlace = ({ text }) => <div>{text}</div>;

class ContactScreen extends Component {
  static defaultProps = {
    center: {
      lat: 19.40,
      lng: -99.24
    },
    zoom: 12
  };

  render() {
    return (
        <div>
          <img src={ContactImage} style={styles.image} alt="Contact Header" />
          <div style={styles.box}>
          		<ContactForm />
          </div>
          <div style={{ height: '100vh', width: '99%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAbRRfUdodzo0-hoY2C-ej1Sdn9Jbxob70' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <SpotPlace
            lat={19.403540}
            lng={-99.240666}
            text="Dinkbit"
          />
        </GoogleMapReact>
      </div>
        </div>
    );
  }
}

export default ContactScreen;