import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import '../POS/CheckOut.css'

const CheckOut = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        city: "",
        country: "",
        voucher: "",
        payment: "",
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvc: ""
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.postalCode) newErrors.postalCode = "Postal Code is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.country) newErrors.country = "Country is required";
        if (!formData.payment) newErrors.payment = "Select a payment method";

        if (formData.payment === "card") {
            if (!formData.cardName) newErrors.cardName = "Cardholder name is required";
            if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
            if (!formData.expDate) newErrors.expDate = "Expiration date is required";
            if (!formData.cvc) newErrors.cvc = "CVC is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Order placed successfully!");
        }
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                 <i className="fa-solid fa-arrow-left icon6" onClick={() => navigate(-1)} style={{fontSize:"13px"}}></i>
                <span>Checkout</span>
            </div>
            <form onSubmit={handleSubmit} className="checkout-content">
                <div className="left-right-container">
                    <div className="left-section">

                        <div className="checkout-box">
                            <h2>Personal Information</h2>
                            <hr></hr>
                            <div className="checkout-grid">
                                <label>
                                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </label>
                                <label>
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </label>
                                <label>
                                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                </label>
                            </div>
                        </div>

                        <div className="checkout-box">
                            <h2>Shipping Address</h2>
                            <hr></hr>
                            <div className="checkout-grid">
                                <label>
                                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                                    {errors.address && <span className="error">{errors.address}</span>}
                                </label>
                                <label>
                                    <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
                                    {errors.postalCode && <span className="error">{errors.postalCode}</span>}
                                </label>
                                <label>
                                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                                    {errors.city && <span className="error">{errors.city}</span>}
                                </label>
                                <label>
                                    <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                                    {errors.country && <span className="error">{errors.country}</span>}
                                </label>
                            </div>
                        </div>

                     <div className="checkout-box">
                        <h2>Voucher</h2>
                        <hr></hr>
                        <input type="text" placeholder="Select Voucher" className="full-width" />
                    </div>

                        <div className="checkout-box">
                            <h2>Payment Methods</h2>
                            <hr></hr>
                            <div className="payment-options">
                                <label className="radio-label">
                                    <input type="radio" name="payment" value="cash" onChange={handleChange} /> <span>Cash</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="payment" value="card" onChange={handleChange} /> <span>Credit or Debit</span>
                                </label>
                            </div>
                            {errors.payment && <span className="error">{errors.payment}</span>}
                            {formData.payment === "card" && (
                                <div className="checkout-grid">
                                    <label>
                                        <input type="text" name="cardName" placeholder="Cardholder Name" value={formData.cardName} onChange={handleChange} />
                                        {errors.cardName && <span className="error">{errors.cardName}</span>}
                                    </label>
                                    <label>
                                        <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} />
                                        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                                    </label>
                                    <label>
                                        <input type="text" name="expDate" placeholder="EXP Date" value={formData.expDate} onChange={handleChange} />
                                        {errors.expDate && <span className="error">{errors.expDate}</span>}
                                    </label>
                                    <label>
                                        <input type="text" name="cvc" placeholder="CVC" value={formData.cvc} onChange={handleChange} />
                                        {errors.cvc && <span className="error">{errors.cvc}</span>}
                                    </label>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="right-section">
                        <div className="checkout-box">
                            <button type="submit" className="place-order">Place Order</button>
                            <p className="terms">By placing your order, you agree to our Privacy Policy and Terms of Use.</p>
                            <h2>Order Summary</h2>
                            <div className="summary-item">
                                <span className="discount">NEWCUSTOMER1234 (-5%)</span>
                                <span className="discount-amount">-Rs4.69</span>
                            </div>
                            <div className="summary-item">
                                <span>Items (3)</span>
                                <span>56.73</span>
                            </div>
                            <div className="summary-item">
                                <span>Before tax:</span>
                                <span>62.23</span>
                            </div>
                            <div className="summary-item">
                                <span>Tax Collected:</span>
                                <span>8.21</span>
                            </div>
                            <hr></hr>
                            <div className="summary-total">
                                <span>Order Total:</span>
                                <span>70.44</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOut ;