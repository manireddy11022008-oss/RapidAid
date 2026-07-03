# RapidAid Registration Page UI Design

## Purpose

The Registration Page allows new users to create a RapidAid account. Users can register as a Patient, Ambulance Driver, Hospital Administrator, or System Administrator (admin accounts are typically created by the system).

## Page Layout

### Header

- 🚑 RapidAid Logo
- Home
- Login

## Registration Section

### Title

# Create Your RapidAid Account

### Subtitle

Join RapidAid and help build a faster, smarter emergency response network.

### Registration Form

#### Personal Information

- Full Name
- Email Address
- Mobile Number
- Date of Birth
- Gender

#### Account Information

- Password
- Confirm Password

#### Role Selection

- 👤 Patient
- 🚑 Ambulance Driver
- 🏥 Hospital Administrator

#### Additional Information

**Patient**
- Blood Group
- Emergency Contact

**Ambulance Driver**
- Driving License Number
- Ambulance Number

**Hospital Administrator**
- Hospital Name
- Hospital ID

### Buttons

- Create Account
- Reset Form

### Existing User

Already have an account?

**Login Here**

## Validation Rules

- All required fields must be completed.
- Email must be unique.
- Mobile number must contain valid digits.
- Password must contain:
  - At least 8 characters
  - One uppercase letter
  - One lowercase letter
  - One number
  - One special character
- Confirm Password must match Password.

## Security Features

- Password Encryption
- Email Verification
- Mobile OTP Verification
- Secure Account Creation
- Role-Based Access Control (RBAC)

## Color Palette

| Element | Color |
|---------|--------|
| Primary | Emergency Red (#DC2626) |
| Secondary | White (#FFFFFF) |
| Accent | Blue (#2563EB) |
| Success | Green (#16A34A) |
| Background | Light Gray (#F8FAFC) |
| Text | Dark Gray (#1F2937) |

## Design Goals

- Simple registration process
- Responsive layout
- Secure user onboarding
- Easy role selection
- User-friendly form validation

## Future Enhancements

- Google Sign-Up
- Aadhaar Verification (Optional)
- QR Medical Profile Generation After Registration
- Face Verification
- Multi-Factor Authentication

## Summary

The Registration Page enables users to securely create a RapidAid account with role-specific information. It supports future integration with email verification, OTP authentication, and QR Medical Profile generation.
