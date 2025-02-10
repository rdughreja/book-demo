import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/POSbook.css'

const steps = [
  { label: 'Board', options: ['ICSE', 'CBSE', 'GSEB'] },
  { label: 'Medium', options: ['Gujarati', 'English', 'Hindi'] },
  { label: 'School', options: ['Primary School', 'Secondary School', 'High Secondary School'] },
  { label: 'Standard', options: ['1-8', '9-10', '11-12'] },
];

const POSbook = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedMedium, setSelectedMedium] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (activeStep === 1) {
      setSelectedBoard(option);
      setActiveStep(2);
    } else if (activeStep === 2) {
      setSelectedMedium(option);
      setActiveStep(3);
    } else if (activeStep === 3) {
      setSelectedSchool(option);
      setActiveStep(4);
    } else if (activeStep === 4) {
      setSelectedStandard(option);
      navigate(`/subjects/${option}`, {
        state: { selectedBoard, selectedMedium, selectedSchool, selectedStandard: option }
      });
    }
  };

  const getMediumOptions = () => {
    if (selectedBoard === 'ICSE') return ['English'];
    if (selectedBoard === 'CBSE') return ['English', 'Hindi'];
    if (selectedBoard === 'GSEB') return ['Gujarati', 'English'];
    return [];
  };

  const getStandardOptions = () => {
    if (selectedSchool === 'Primary School') return ['1','2','3','4','5','6','7','8'];
    if (selectedSchool === 'Secondary School') return ['9','10'];
    if (selectedSchool === 'High Secondary School') return ['11','12'];
    return [];
  };

  const handleOptionClick2 = (option) => {
    if (activeStep === 4) {
      setSelectedStandard(option);
      navigate(`/subjects/${option}`, {
        state: { 
          selectedBoard, 
          selectedMedium,  // ✅ Pass selectedMedium here
          selectedSchool, 
          selectedStandard: option 
        }
      });
    }
  };
  
  

  return (
    <div className="find-books-container">
      <h1 className="title">Find Your Books</h1>
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`step ${activeStep >= index + 1 ? 'active' : ''}`} style={{ backgroundColor: "white" }}>
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
      <div className="options-container">
        {activeStep === 1 && steps[activeStep - 1].options.map((option, index) => (
          <button key={index} className="option-button" onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
        {activeStep === 2 && getMediumOptions().map((option, index) => (
          <button key={index} className="option-button" onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
        {activeStep === 3 && steps[activeStep - 1].options.map((option, index) => (
          <button key={index} className="option-button" onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
        {activeStep === 4 && (
          <div className="grid-container">
            {getStandardOptions().map((option, index) => (
              <button key={index} className="grid-item option-button" onClick={() => handleOptionClick2(option)}>
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
