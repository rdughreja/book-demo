import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../styles/OrderDetails.css';

const OrderDetails = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => navigate('/Profile');
  const handleNotificationClick = () => navigate('/notification');

  const location = useLocation();
  const order = location.state?.order; 

  return (
    <div className="order-container">
      <div className="order-header">
        <h1>Order</h1>
        <div className="order-icons">
          <i className="fa-solid fa-bell" onClick={handleNotificationClick}></i>
          <img
            src="https://placehold.co/40x40"
            alt="User profile"
            className="profile-img"
            onClick={handleProfileClick}
          />
        </div>
      </div>

      <div className="order-details-container">
      <h2>Order for {order?.customer || "Unknown Customer"}</h2>

        <div className="order-content">
          <div className="product-list2">
            <div className="order-header2">
              <span>{order?.date} | </span>
              <span className="status-shipped">Shipped</span>
            </div>
            <h3>Products</h3>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="/assets/clg.png" alt="Marble Tables" className="product-img" /></td>
                  <td>Marble Tables</td>
                  <td>302011</td>
                  <td>1 pcs</td>
                  <td>$400.00</td>
                  <td>$400.00</td>
                </tr>
                <tr>
                  <td><img src="/assets/clg.png" alt="Staircase Totems" className="product-img" /></td>
                  <td>Staircase Totems</td>
                  <td>302011</td>
                  <td>1 pcs</td>
                  <td>$185.00</td>
                  <td>$185.00</td>
                </tr>
              </tbody>
            </table>
            <div className="pricing-summary">
            <p><span>Subtotal:</span> ₹585.00</p>
              <p><span>Discount:</span> $5.00</p>
              <p><span>Shipping Fee: </span>$5.00</p>
              <h4><span>Grand Total: </span>$590.00</h4>
            </div>
          </div>

          <div className="info-sections">
            <div className="info-card">
              <div className="info-card-title">
                <i className="fas fa-info-circle order-icon"></i>
                <h4> General Information</h4>
              </div>
              <hr className="orderdivider" />

              <div className="info-row">
                <div className="info-label">
                  <i className="fas fa-clipboard-list"></i>
                  <strong>Order Status:</strong>
                </div>
                <div className="info-text">
                  <span>Processing</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-label">
                  <i className="fas fa-user"></i>
                  <strong>Customer:</strong>
                </div>
                <div className="info-text">
                  <span>Jay Hodgerson</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-label">
                  <i className="fas fa-envelope"></i>
                  <strong>Email:</strong>
                </div>
                <div className="info-text">
                  <span>jay.hodgerson@email.com</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-label">
                  <i className="fas fa-phone"></i>
                  <strong>Phone:</strong>
                </div>
                <div className="info-text">
                  <span>650-429-8742</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-title">
                <i className="fas fa-credit-card order-icon"></i>
                <h4> Payment</h4>
              </div>
              <hr className="orderdivider" />

              <div className="info-row">
                <div className="info-label">
                  <i className="fas fa-hashtag"></i>
                  <strong>Transaction ID:</strong>
                </div>
                <div className="info-text">
                  <span>492030218987</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-label">
                  <i className="fas fa-wallet"></i>
                  <strong>Method:</strong>
                </div>
                <div className="info-text">
                  <span>VISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Move Address Cards Below Product List */}
        <div className="address-sections">
          <div className="info-card2">
            <div className="info-card-title">
              <i className="fas fa-truck order-icon"></i>
              <h4>Shipping Address</h4>
            </div>
            <hr className="orderdivider" />

            <div className="info-row2">
              <div className="info-label">
                <i className="fas fa-location-dot"></i>
                <strong>Address</strong>
              </div>
              <div className="info-text">
                <span>Jay Hangiuotn</span>
                <span>1833 Bel Meadow Drive, Fonta</span>
                <span>California 92335, USA</span>
              </div>
            </div>
          </div>

          <div className="info-card2">
            <div className="info-card-title">
              <i className="fas fa-truck order-icon"></i>
              <h4>Billing Address</h4>
            </div>
            <hr className="orderdivider" />

            <div className="info-row2">
              <div className="info-label">
                <i className="fas fa-location-dot"></i>
                <strong>Address</strong>
              </div>
              <div className="info-text">
                <span>Jay Hangiuotn</span>
                <span>1833 Bel Meadow Drive, Fonta</span>
                <span>California 92335, USA</span>
              </div>
            </div>
          </div>

          <div className="info-card2">
            <div className="info-card-title">
              <i className="fas fa-truck order-icon"></i>
              <h4>Shipping</h4>
            </div>
            <hr className="orderdivider" />

            <div className="info-row">
              <div className="info-label">
                <i className="fas fa-box"></i>
                <strong>ID:</strong>
              </div>
              <div className="info-text">
                <span>SHIP120381</span>
              </div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <i className="fas fa-truck"></i>
                <strong>Method:</strong>
              </div>
              <div className="info-text">
                <span>Regular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
