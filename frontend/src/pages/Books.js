import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Books.css';

const steps = [
  { label: 'Board', options: ['ICSE', 'CBSE', 'GSEB'] },
  { label: 'Medium', options: ['Gujarati', 'English', 'Hindi'] },
  { label: 'School', options: ['Primary School', 'Secondary School', 'High Secondary School'] },
  { label: 'Standard', options: ['1-8', '9-10', '11-12'] },
];

const Books = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (activeStep === 1) {
      setSelectedBoard(option); // Track the selected board
      setActiveStep(2); // Move to Medium step
    } else if (activeStep === 2) {
      setActiveStep(3); // Move to School step
    } else if (activeStep === 3) {
      setSelectedSchool(option); // Track the selected school
      setActiveStep(4); // Move to Standard step
    } else if (activeStep === 4) {
        navigate(`/Book1/${option}`);
    }
  };

  const getMediumOptions = () => {
    if (selectedBoard === 'ICSE') {
      return ['English'];
    } else if (selectedBoard === 'CBSE') {
      return ['English', 'Hindi'];
    } else if (selectedBoard === 'GSEB') {
      return ['Gujarati', 'English'];
    }
    return [];
  };

  const getStandardOptions = () => {
    if (selectedSchool === 'Primary School') {
      return ['1','2','3','4','5','6','7','8'];
    } else if (selectedSchool === 'Secondary School') {
      return ['9','10'];
    } else if (selectedSchool === 'High Secondary School') {
      return ['11','12'];
    }
    return [];
  };

  return (
    <div className="find-books-container">
      <h1 className="title">Find Your Books</h1>

      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`step ${activeStep >= index + 1 ? 'active' : ''}`}>
              {activeStep > index + 1 ? (
                <div className="check">
                  <img src="/assets/chekmark2.png" alt="Completed" className="checkmark" />
                </div>
              ) : (
                <span className="step-number">{index + 1}</span>
              )}
              <p>{step.label}</p>
            </div>

            {index < steps.length - 1 && (
              <div className={`lines ${activeStep >= index + 2 ? 'active' : ''}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {activeStep <= steps.length && (
        <div className="options-container">
          {activeStep === 1 &&
            // Show Board options
            steps[activeStep - 1].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}

          {activeStep === 2 &&
                // Show Medium options based on selected board
                getMediumOptions().map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))
          }

          {activeStep === 3 &&
            // Show School options
            steps[activeStep - 1].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}

          {activeStep === 4 &&
            // Show Standard options based on selected School
            getStandardOptions().map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))
              }
        </div>
      )}
    </div>
  );
};

export default Books;