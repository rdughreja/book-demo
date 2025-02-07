import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Reports.css'

const Reports = () => {
  
  const [activeTab, setActiveTab] = useState("revenue report"); 

  const SaleData = [
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "331",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    
  ];

  const Data = [
    {
      serial: "022",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    // Duplicate rows for demonstration
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    {
      serial: "01",
      book: "Wuthering Heights",
      date: "28.03.2024",
      sellPrice: "Rs.55.00",
      profit: "Rs.7,985.00",
      profitMargin: "15.00%",
      totalRevenue: "Rs.8,000.00",
    },
    
  ];

  const handleToggle = (tab) => {
    setActiveTab(tab); // Update the active tab
  };

  const navigate = useNavigate(); 
    const handleProfileClick = () => {
      navigate('/Profile');  
    };

  const handleNotificationClick = () => {
      navigate('/notification');  
    };
  
  return (
    <div className="report-container">
        <div className="report-header">
              <div className="report-title"> 
                 <i className="fa-solid fa-arrow-left back" style={{fontSize:"14px",color:'#608BC1',backgroundColor:"#D9D9D9"}}></i>
                 <h1>Reports</h1>
              </div>
         
               <div className="report-two-icon">
                  <div className="bell">
                      <i className="fa-solid fa-bell note-bell" style={{color:"#00163B"}} onClick={handleNotificationClick}></i>
                  </div>
                  <div className="profile">
                  <img src="https://placehold.co/40x40" alt="User profile" className='profile-img' onClick={handleProfileClick}/>
                 </div>
              </div>
        </div>

        <div className="tabs">
              <button className={`tab ${activeTab === "revenue report" ? "active" : ""}`} onClick={() => handleToggle("revenue report")}>Revenue Report</button>
              <button className={`tab ${activeTab === "staff report" ? "active" : ""}`} onClick={() => handleToggle("staff report")}>Staff Report</button>
        </div>

        <div className="table-container">
            {activeTab === "revenue report" ?  (
                <table className="sales-table">
                  <tbody>
                    {SaleData.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="sales-heading">S.No</div>
                          {item.serial}
                        </td>
                        <td>
                          <div className="sales-heading">Top Selling Books</div>
                          {item.book}
                        </td>
                        <td>
                          <div className="sales-heading">Revenue By Date</div>
                          {item.date}
                        </td>
                        <td>
                          <div className="sales-heading">Sell Price</div>
                          {item.sellPrice}
                        </td>
                        <td>
                          <div className="sales-heading">Profit</div>
                          {item.profit}
                        </td>
                        <td>
                          <div className="sales-heading">Profit Margin</div>
                          {item.profitMargin}
                        </td>
                        <td>
                          <div className="sales-heading">Total Revenue</div>
                          {item.totalRevenue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            ):(
              <table className="sales-table">
                <tbody>
                  {Data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="sales-heading">S.No</div>
                        {item.serial}
                      </td>
                      <td>
                        <div className="sales-heading">Top Selling Books</div>
                        {item.book}
                      </td>
                      <td>
                        <div className="sales-heading">Revenue By Date</div>
                        {item.date}
                      </td>
                      <td>
                        <div className="sales-heading">Sell Price</div>
                        {item.sellPrice}
                      </td>
                      <td>
                        <div className="sales-heading">Profit</div>
                        {item.profit}
                      </td>
                      <td>
                        <div className="sales-heading">Profit Margin</div>
                        {item.profitMargin}
                      </td>
                      <td>
                        <div className="sales-heading">Total Revenue</div>
                        {item.totalRevenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
         )}
    </div>

    </div> /* report-contanier*/
  )
}

export default Reports
