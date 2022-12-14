import React, { useState } from 'react';

export default function ProfileSettingsPage() {
  const [pin, setPin] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.value);
  };

  return (
    <form>
      <label>
        Pin:
        <input type="number" value={pin} onChange={handlePinChange} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Profile Image:
        <input type="file" value={profileImage} onChange={handleProfileImageChange} />
        <img src={profileImage} alt="Preview of updated profile image" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
