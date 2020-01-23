import React from 'react';
import styles from 'screens/ContactScreen/ContactScreenStyle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function ContactForm() {
  return (
    <React.Fragment>
      <p style={styles.title}>
        ESTAMOS AQUÍ PARA AYUDARTE
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Teléfono"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}sm={6}>
          <TextField
            id="email"
            name="email"
            label="Correo electrónico"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="choice"
            name="choice"
            label="Solución de interés"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}