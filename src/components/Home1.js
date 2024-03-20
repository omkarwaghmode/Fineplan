import React from 'react';
import canara from './images/CanRMF.jpeg';
import Mirae from './images/MirMF.jpeg';
import Tata from './images/TataMF.jpeg';
import Boi from './images/Boi.png';
import icici from './images/icici.jpeg';

function Home1() {
  return (
    <div>
        <div className='container1'>
    
        {/* ~~~~~~~                 Canara MF   ~~~~~~~~~~~~~~~~~~~~~   */}
        <div className="card" style={{width: '90rem' }}>
          <img src={canara} className="card-img-top" alt="..." height="400px" />
          <div className="card-body1">
            <h5 className="card-title">Canara robeco mutual fund</h5>
            <p className="card-text" /><p>Canara Robeco Mutual Fund is the second oldest Mutual Fund in India, established in December 1987 as Canbank Mutual Fund. Subsequently, in 2007, Canara Bank partnered with Robeco (now a part of ORIX Corporation, Japan) and the mutual fund was renamed as Canara Robeco Mutual Fund.</p>
            <p>
            Since then, it has consistently been one of the fastest growing mutual funds in India in terms of AuM. 
            </p>        


            <p> The Scheme will remain diversified across key sectors and economic variables.</p><p/>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              <p>Our solutions offer a range of investment options, including diversified and thematic equity schemes, hybrid and monthly income funds and a wide range of debt and treasury products.<br />
                There is no assurance that the investment objective of the Scheme will be realized.</p></li>
            <li className="list-group-item" />
            <li className="list-group-item1"> <p> Level : </p><h6> Low </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://www.canararobeco.com/smart-invest/sign-in" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.canararobeco.com/" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>
        <br/>
        <br/>
        {/* ~~~~~~~                 Mirae   ~~~~~~~~~~~~~~~~~~~~~   */}
        <div className="card" style={{width: '90rem'}}>
          <img src={Mirae} className="card-img-top" alt="..." height="250px" />
          <div className="card-body1">
            <h5 className="card-title">Mirae Asset Global Investments (India) Pvt. Ltd
</h5>
            <p className="card-text" /><p>When you invest for five years or more, you can expect gains that comfortably beat the inflation rate as well as returns from fixed income options. But be prepared for ups and downs in your investment value along the way.</p>
            <p>
             Mirae Asset Global Investments is a diversified asset manager providing innovative solutions worldwide to help clients achieve their goals in a rapidly changing world.</p>
            <p>
              Like for all equity funds, you must invest only through the SIP route. Click here to read a primer on SIP investing.
            </p><p>
              Warning: Do not invest in this, or any other multi-cap fund, if you need to redeem your investment in less than five years.
            </p>
            <h6>Taxability of earnings:</h6>
            <p>
              Capital gains
              14%

            </p>
            <p>
              Dividends are added to the income of the investors and taxed according to their respective tax slabs. Further, if an investor's dividend income exceeds Rs. 5,000 in a financial year, the fund house also deducts a TDS of 14% before distributing the dividend.</p><p />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
            The investment objective of the scheme is to generate long term capital appreciation by capitalizing on potential investment opportunities through predominantly investing in equities, equity related securities.</li>
            <li className="list-group-item" />
            <li className="list-group-item1"> <p> Level : </p><h6> High </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://transact.miraeassetmf.co.in/investor/General/Login.aspx#openModal" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.miraeassetmf.co.in/" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>
        <br/> 
        <br/>
      
        {/*       Tata Mutual Fund starts Here     */}
        <div className="card" style={{width: '90rem'}}>
          <img src={Tata} className="card-img-top" alt="..." height="250px" width="400px" />
          <div className="card-body1">
            <h5 className="card-title">Tata Mutual Fund</h5>
           
            <p className="card-text">
            Tata Mutual Fund is a part of Tata Group, a renowned and one of the country's largest industrial groups. The group is well-known and respected for its adherence to business ethics. While Tata Sons Limited holds 67.91% share in the fund house, the rest 32.09% is held by Tata Investment Corporation Limited.

            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              <p>The investment objective of the scheme is to generate regular income & capital appreciation by investing in a portfolio of debt & money market instruments with relatively lower interest rate risk.
</p></li>
            <li className="list-group-item" />
            <li className="list-group-item"> <p> Level : </p><h6> Very High </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 15.9% </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://online.tatamutualfund.com/registration?gclid=Cj0KCQjwyMiTBhDKARIsAAJ-9VupQ2n9aNAPa_bs6HIfJFnlHgXw2TMfhPa0_NIBut4Pk1RwD-ERHc8aAnhfEALw_wcB#!" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.tatamutualfund.com/?utm_source=Google&utm_medium=CPC&utm_campaign=SB_TMF_Search_Brand_Conversions&gclid=Cj0KCQjwyMiTBhDKARIsAAJ-9VsqBj1WRUv-Y7PfVvkX6m4IHKkI4KtOl9ygdWNBP8YEImtWfeMAQTkaAhAoEALw_wcB" className="card-link" target="_blank">Read more..</a>
            
          </div>
        </div>
        <br/> 
        <br/>
        {/*.......   Bank of India ..............         */}
        <div className="card" style={{width: '90rem'}}>
          <img src={Boi} className="card-img-top" alt="..." height="300px" width="400px" />
          <div className="card-body1">
            <h5 className="card-title">BOI AXA Mutual Fund</h5>
            <p className="card-text">
            The BOI AXA Mutual Fund is one of India's largest Mutual Fund houses. It is a joint venture between one of the largest Public Sector Banks in India, the Bank of India or BOI, and the AXA Investment Managers group, one of the world's largest asset management and investment corporations.

            </p></div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
            With an AUM of Rs 3,044 crores, BOI AXA Mutual Funds offers 17 schemes across different categories including 29 equity, 28 debt, and 25 hybrid mutual funds.

            </li><li className="list-group-item" />
            <li className="list-group-item"> <p> Risk : </p><h6>  High </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 30% </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://boiaxamf.co.in/BOIAXA/Landing" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.boiaxamf.in/" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>

        <br/> 
        <br/>


        {/*  ICICI Prudential Mutual Fund   */}
        <div className="card" style={{width: '90rem'}}>
          <img src={icici} className="card-img-top" alt="..." height="200px" width="400px" />
          <div className="card-body1">
            <h5 className="card-title"> ICICI Prudential Mutual Fund</h5>
            <p className="card-text">
              ICICI Prudential Mutual Fund is the third largest mutual fund house by asset size in India. The fund house manages assets worth (AUM) of Rs 3.58 lakh crore for the quarter ending March, 2020. The asset size of the fund house decreased by 2.90% from its December 2019 quarterly figure.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              Investment Objective of ICICI Prudential  Fund ICICI Prudential  Fund aims to generate capital growth over the long term and to offer income to investors via investment in a portfolio mainly consisting of equity and equity-related instruments of large cap companies.
            </li>
            <li className="list-group-item" />
            <li className="list-group-item"> <p> Risk : </p><h6> Very High </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 15.5% </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://investor-web.hdfcfund.com/new-investor" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.hdfcfund.com/our-products/hdfc-top-100-fund" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>



  

    </div>
    </div>
  )
}

export default Home1