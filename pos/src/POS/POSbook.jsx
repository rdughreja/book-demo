import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../POS/POSbook.css';

const steps = [
  { label: 'Board', options: ['ICSE', 'CBSE', 'GSEB'] },
  { label: 'Medium', options: ['Gujarati', 'English', 'Hindi'] },
  { label: 'Standard', options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
];

const POSbook = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedMedium, setSelectedMedium] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (activeStep === 1) {
      setSelectedBoard(option);
      setActiveStep(2);
    } else if (activeStep === 2) {
      setSelectedMedium(option);
      setActiveStep(3);
    } else if (activeStep === 3) {
      setSelectedStandard(option);
      navigate(`/subjects/${option}`, {
        state: { selectedBoard, selectedMedium, selectedStandard: option },
      });
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    } else {
      navigate(-1);
    }
  };

  const getMediumOptions = () => {
    if (selectedBoard === 'ICSE') return ['English'];
    if (selectedBoard === 'CBSE') return ['English', 'Hindi'];
    if (selectedBoard === 'GSEB') return ['Gujarati', 'English'];
    return [];
  };

  return (
    <div className="find-books-container">
      {/* Search Bar Section */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search school"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        /><i className='fa-solid fa-search search-icon'></i>
      </div>

      {/* Find Book Title Section */}
      <div className="find-book-title">
        <i className="fa-solid fa-arrow-left icon7" onClick={handleBack}></i>
        <h1 className="title2">Find Your Books</h1>
      </div>

      {/* Steps Container */}
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`step ${activeStep >= index + 1 ? 'active' : ''}`} style={{ backgroundColor: 'white' }}>
              {activeStep > index + 1 ? (
                <div className="check">
                  <img src="/assets/checkmark.png" alt="Completed" className="checkmark" />
                </div>
              ) : (
                <span className="step-number">{index + 1}</span>
              )}
              <p>{step.label}</p>
            </div>
            {index < steps.length - 1 && <div className={`lines ${activeStep >= index + 2 ? 'active' : ''}`}></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Options Container */}
      <div className="options-container">
        {activeStep === 1 &&
          steps[activeStep - 1].options.map((option, index) => (
            <button key={index} className="option-button" onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        {activeStep === 2 &&
          getMediumOptions().map((option, index) => (
            <button key={index} className="option-button" onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        {activeStep === 3 && (
          <div className="grid-container">
            {steps[2].options.map((option, index) => (
              <button key={index} className="grid-item option-button" onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default POSbook;
