import React from 'react'
import hdfc from './images/hdfc-mutual-fund.jpeg';
import kotak from './images/Kotak-Mutual-Fund-Logo.jpeg';
import axis from './images/axis.jpeg';
import icici from './images/icici.jpeg';
import sbi from './images/sbi1.png';
 import motilal from './images/motilal.jpeg';
import lic from './images/lic.png';
import './css/Home.css';
function Navbar() {
  return (
    <div>
      <div className='container1'>
        <br/>
        <br/>
        <br/>
<h1>EXPLORE POPULAR MUTUAL FUNDS   </h1>
<br/>
        {/* ~~~~~~~                 HDFC Mutual funds starts here   ~~~~~~~~~~~~~~~~~~~~~   */}
        <div className="card" style={{width: '90rem'}}>
          <img src={hdfc} className="card-img-top" alt="..." height="400px" />
          <div className="card-body1">
            <h5 className="card-title">HDFC BANK</h5>
            <p className="card-text" /><p>An open ended equity scheme predominantly investing in large cap stocks.</p>
            <p>
              The Scheme aims to provide long-term capital appreciation. It will maintain a minimum exposure of 80% to Large Cap stocks, as defined by SEBI, which currently are the 100 largest companies in India in terms of full market capitalization.
            </p>        
            <p>     Generally, large cap companies are well established businesses that are in operation for a longer period of time and are well positioned to absorb business pressures across various market cycles. Due to their size, they also benefit from economies of scale.
            </p>        
            <p>        The Scheme will remain diversified across key sectors and economic variables.</p><p/>
          
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              <p>To provide long-term capital appreciation/income by investing predominantly in Large-Cap companies.<br />
                There is no assurance that the investment objective of the Scheme will be realized.</p></li>
            <li className="list-group-item" />
            <li className="list-group-item1"> <p> Level : </p><h6> Very High </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://investor-web.hdfcfund.com/new-investor" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.hdfcfund.com/our-products/hdfc-top-100-fund" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>
        <br/>        
        <br/>        
                

        {/* ~~~~~~~                 Kotak Mutual funds starts here   ~~~~~~~~~~~~~~~~~~~~~   */}
        <div className="card" style={{width: '90rem'}}>
          <img src={kotak} className="card-img-top" alt="..." height="250px" />
          <div className="card-body1">
            <h5 className="card-title">Kotak India Growth Fund </h5>
            <p className="card-text" /><p>When you invest for five years or more, you can expect gains that comfortably beat the inflation rate as well as returns from fixed income options. But be prepared for ups and downs in your investment value along the way.</p>
            <p>
              This fund is mandated to invest at least 25 per cent of its money each in stocks of large, medium and small-sized companies. Such funds can be fairly volatile since at least 50% of their assets will always be invested in mid and small cap stocks which generally experience more severe ups and downs. This makes them suitable for long-term investors who don’t mind higher risk, but we suggest you also consider flexi-cap funds which offer complete freedom to fund managers to choose companies of different sizes.</p>
            <p>
              Like for all equity funds, you must invest only through the SIP route. Click here to read a primer on SIP investing.
            </p><p>
              Warning: Do not invest in this, or any other multi-cap fund, if you need to redeem your investment in less than five years.
            </p>
            <h6>Taxability of earnings:</h6>
            <p>
              Capital gains
              If the mutual fund units are sold after 1 year from the date of investment, gains upto Rs 1 lakh in a financial year are exempt from tax. Gains over Rs 1 lakh are taxed at the rate of 10%.
              If the mutual fund units are sold within 1 year from the date of investment, entire amount of gain is taxed at the rate of 15%.
              No tax is to be paid as long as you continue to hold the units.
              Dividends
            </p>
            <p>
              Dividends are added to the income of the investors and taxed according to their respective tax slabs. Further, if an investor's dividend income exceeds Rs. 5,000 in a financial year, the fund house also deducts a TDS of 10% before distributing the dividend.</p><p />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              The investment objective of the scheme is to generate capital appreciation from a diversified portfolio of equity &amp; equity related instruments across market capitalisation and sectors. However, there is no assurance that the objective of the scheme will be realized.</li>
            <li className="list-group-item" />
            <li className="list-group-item1"> <p> Level : </p><h6> Very High </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://prodtest.kotakmf.com/investor/SIP-PreLogin-Mobile-Submit" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.hdfcfund.com/our-products/hdfc-top-100-fund" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>
        <br/>
        <br/>
        {/*       AXIS STARTS HERE        */}
        <div className="card" style={{width: '90rem'}}>
          <img src={axis} className="card-img-top" alt="..." height="300px" />
          <div className="card-body1">
            <h5 className="card-title">AXIS BANK</h5>
            <p className="card-text">
              Axis Mutual fund starts funding from 04/09/2009. Managing assets of about 69 crore rupees.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              <p>To provide long term capital appreciation by investing in a diversified portfolio of equity and equity-related instruments across market capitalization.</p></li>
            <li className="list-group-item" />
            <li className="list-group-item"> <p> Level : </p><h6> Very High </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 12.6% </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://investor-web.hdfcfund.com/new-investor" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.hdfcfund.com/our-products/hdfc-top-100-fund" className="card-link" target="_blank">Read more..</a>
            
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
<br/>
<br/>


        {/* SBI            */}
        <div className="card" style={{width: '90rem'}}>
          <img src={sbi} className="card-img-top" alt="..." height="200px" width="400px" />
          <div className="card-body1">
            <h5 className="card-title">SBI Bluechip Direct Plan</h5>
            <p className="card-text">
              SBI Mutual fund starts funding from 29/06/1987. Managing assets of about 69 crore rupees.
            </p></div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              To provide investors long-term capital appreciation along with the liquidity of an open-ended scheme by investing in a mix of debt and equity. The scheme will invest in a diversified portfolio of equities of high growth companies and balance the risk through investing the rest in a relatively safe portfolio of debt.
            </li><li className="list-group-item" />
            <li className="list-group-item"> <p> Risk : </p><h6> Very High </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 16.1% </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://investor-web.hdfcfund.com/new-investor" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.hdfcfund.com/our-products/hdfc-top-100-fund" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>
        <br/>
<br/>


        {/*  Motilal Oswal Financial Services           */}
        <div className="card" style={{width: '90rem'}}>
          <img src={motilal} className="card-img-top" alt="..." height="200px" width="400px" />
          <div className="card-body1">
            <h5 className="card-title">Motilal Oswal Financial Services</h5>
            <p className="card-text">
              Motilal Oswal Financial Services Limited is an Indian financial services company offering a range of financial products and services. The company was founded by Motilal Oswal and Raamdeo Agrawal in 1987.
            </p></div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              Objective of the Scheme is to achieve long term capital appreciation by investing in upto 25 companies with long term sustainable competitive advantage and growth potential.
            </li><li className="list-group-item" />
            <li className="list-group-item"> <p> Risk : </p><h6> Very High </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 7.9%
              </h6><p /></li>
          </ul>
          <div className="card-body1">
            <a href="https://investor-web.hdfcfund.com/new-investor" className="card-link" target="_blank"> Invest Now </a>
            <a href="https://www.hdfcfund.com/our-products/hdfc-top-100-fund" className="card-link" target="_blank">Read more..</a>
          </div>
        </div>

        <br/>
<br/>
        {/*    LIC of INDIA     */}
        <div className="card" style={{width: '90rem'}}>
          <img src={lic} className="card-img-top" alt="..." height="200px" width="400px" />
          <div className="card-body1">
            <h5 className="card-title">LIC of INDIA
            </h5>
            <p className="card-text">
              LIC of India was created on 1st September 1956 when the government of India passed the Life Insurance of India Act, nationalising the private insurance industry in India. The company was established with the merger of over 245 insurance companies and provident societies.
            </p></div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6>Investment Objective</h6>
              Spread Life Insurance widely and in particular to the rural areas and to the socially and economically backward classes with a view to reaching all insurable persons in the country and providing them adequate financial cover against death at a reasonable cost.
            </li><li className="list-group-item" />
            <li className="list-group-item"> <p> Risk : </p><h6>  High 
              </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 14.3% </h6><p /></li>
            <li className="list-group-item"> <p> Return : </p><h6> 14.3% </h6><p /></li>
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

export default Navbar