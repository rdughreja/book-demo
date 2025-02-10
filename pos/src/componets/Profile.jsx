import React,{useState} from 'react';
import '../styles/Profile.css';

const Profile = () => {

        const [profileImage, setProfileImage] = useState("https://placehold.co/80x80");
      
        const handleImageUpload = (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              setProfileImage(reader.result); // Update the profile image preview
            };
            reader.readAsDataURL(file);
          }
        };
      
  return (
    <div className="report-container">
    <div className="report-header">
      <div className="report-title">
        <i className="fa-solid fa-arrow-left back" style={{ fontSize: "14px", color: 'white' }}></i>
        <h1>Profile</h1>
      </div>

      <div className="report-two-icon">
        <div className="bell">
          <i className="fa-solid fa-bell note-bell" style={{color: "#00163B"}}></i>
        </div>
        <div className="profile">
          <img src="https://placehold.co/40x40" alt="User profile" className='profile-img' />
        </div>
      </div>
    </div>

    <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header-card">
            <div className="image-upload">
                <label htmlFor="file-input">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-avatar"
                    style={{ cursor: "pointer" }}
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
              <div className="profile-text">
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-role">Manager</p>
              </div>
          </div>

          {/* Form Section */}
          <div className="profile-form">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" value="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value="johndoe123@gmail.com" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" value="123 Street USA, Chicago" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <div className="password-group">
                <input type="password" placeholder="••••••••" />
                <i className="fa-solid fa-eye eye"></i>
              </div>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="password-group">
                <input type="password" placeholder="••••••••" />
                <i className="fa-solid fa-eye eye"></i>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="profile-actions">
            <button className="btn discard-btn">Discard Changes</button>
            <button className="btn save-btn">Save Changes</button>
          </div>
        </div>
      </div>

  </div>
  )
}

export default Profile
