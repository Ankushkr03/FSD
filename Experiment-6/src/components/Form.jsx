import {
    TextField,
    Button,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Box,
    Grid
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
        if (validate()) {
            alert('Registration Successful!');
            console.log(formData);
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 700, mb: 4 }}>
                Registration
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Date of Birth"
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            fullWidth
                            required
                            InputLabelProps={{ shrink: true }}
                            error={Boolean(errors.dob)}
                            helperText={errors.dob}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={Boolean(errors.phone)}
                            helperText={errors.phone}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            required
                            multiline
                            rows={2}
                            error={Boolean(errors.address)}
                            helperText={errors.address}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="University Name"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={Boolean(errors.university)}
                            helperText={errors.university}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
                            Select Role
                        </Typography>
                        <FormGroup row>
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
                            <Typography color="error" variant="caption" sx={{ ml: 1 }}>
                                {errors.role}
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            size="large"
                            sx={{
                                mt: 2,
                                py: 1.5,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                boxShadow: 4
                            }}
                        >
                            Complete Registration
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}