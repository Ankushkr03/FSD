import {
  TextField,
  Button,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    phone: '',
    address: '',
    university: '',
    role: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  // Calculate age from DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const validate = () => {
    let temp = {};

    if (formData.name.length < 3)
      temp.name = 'Name must be at least 3 characters';

    if (!formData.dob)
      temp.dob = 'Date of Birth is required';
    else if (calculateAge(formData.dob) < 18)
      temp.dob = 'You must be at least 18 years old';

    if (!/^[0-9]{10}$/.test(formData.phone))
      temp.phone = 'Enter valid 10-digit phone number';

    if (formData.address.length < 5)
      temp.address = 'Address too short';

    if (formData.university.length < 3)
      temp.university = 'University name required';

    if (!formData.role)
      temp.role = 'Please select a role';

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity() && validate()) {
      alert('Registration Successful!');
      console.log(formData);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom align="center">
        Registration Form
      </Typography>

      <form onSubmit={handleSubmit}>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Date of Birth"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ shrink: true }}
          error={Boolean(errors.dob)}
          helperText={errors.dob}
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={Boolean(errors.phone)}
          helperText={errors.phone}
        />

        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          multiline
          rows={3}
          error={Boolean(errors.address)}
          helperText={errors.address}
        />

        <TextField
          label="University Name"
          name="university"
          value={formData.university}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={Boolean(errors.university)}
          helperText={errors.university}
        />

        {/* Role Selection */}
        <Typography sx={{ mt: 2 }}>
          Select Role
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.role === 'Student'}
                onChange={() => handleRoleChange('Student')}
              />
            }
            label="Student"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.role === 'Professor'}
                onChange={() => handleRoleChange('Professor')}
              />
            }
            label="Professor"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.role === 'Independent'}
                onChange={() => handleRoleChange('Independent')}
              />
            }
            label="Independent"
          />
        </FormGroup>

        {errors.role && (
          <Typography color="error" variant="body2">
            {errors.role}
          </Typography>
        )}

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>

      </form>
    </Container>
  );
}
