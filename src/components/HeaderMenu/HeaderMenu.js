import React, {Component} from "react";
import styles from 'components/HeaderMenu/HeaderMenuStyle';

class HeaderMenu extends Component {
  render() {
  return (
  <div style={styles.topBarStyle}>
      <span></span>
      <p style={styles.textStyle}>Atención inmediata: (+52) 55 22241607</p>
      <span></span>
      
    </div>
  );
}
}

export default HeaderMenu;