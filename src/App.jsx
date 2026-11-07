import {Card,CardItem,CardApps,CardRow} from './components/Component.jsx'
import './App.css'
import phone from './assets/col-md-6 (1).png'
import vector from './assets/Vector (5).png'
import apple from './assets/Vector (6).png'
import vector7 from './assets/Vector (7).png'
import vector8 from './assets/Vector (8).png'
import vector9 from './assets/Vector (9).png'
import userAvatar from './assets/circle-box.png'
import map from './assets/pngwing 1.png'
import media from './assets/media.png'

const App = () => (
  <>
    <div className='header'>
      <h1 style={{ color: 'white' }}>BrandName</h1>
      <div className='headerPar'>
        <p>Home</p>
        <p>Product</p>
        <p>Pricing</p>
        <p>Contact</p>
      </div>

      <h4 style={{color:'white'}}>Login</h4>
      <button style={{ backgroundColor: '#23A6F0', padding: '15px', color: 'white', border: 'none', borderRadius: '5px' }}>Become a member →</button>
    </div>
    
    <div className='container1'>
      <div className='textBox'>
        <h1 style={{color:'white'}}>Financial Assistance With True Purpose</h1>
        <p style={{color:'white'}}>We know how large objects will act, but things on a small scale.</p>
        <div style={{display:'flex',gap:'10px'}}><button style={{backgroundColor:'#23A6F0',color:'white',border:'none',borderRadius:'20px',padding:'10px'}}>Get Quote Now</button><button style={{backgroundColor:'transparent',border:'1px solid white',color:'white',borderRadius:'20px',padding:'10px'}}>Get Quote Now</button></div>
      </div>
      <div>
        <img src={phone} alt="" />
      </div>
    </div>

    
      <div className="textBox2">
        <h1>Better Strategy With Quality Business</h1>
        <p style={{color:'grey'}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>

      <div className='cards'>
        <div className='card'><img src={vector} alt="" /><Card title={'Investment Trading'} description={'the quick fox jumps over the lazy dog'}></Card></div>
        <div className='card'><img src={vector} alt="" /><Card title={'Investment Trading'} description={'the quick fox jumps over the lazy dog'}></Card></div>
        <div className='card'><img src={vector} alt="" /><Card title={'Investment Trading'} description={'the quick fox jumps over the lazy dog'}></Card></div>
        <div className='card'><img src={vector} alt="" /><Card title={'Investment Trading'} description={'the quick fox jumps over the lazy dog'}></Card></div>
        <div className='card'><img src={vector} alt="" /><Card title={'Investment Trading'} description={'the quick fox jumps over the lazy dog'}></Card></div>
        <div className='card'><img src={vector} alt="" /><Card title={'Investment Trading'} description={'the quick fox jumps over the lazy dog'}></Card></div>
      </div>

      <div className="textBox2">
        <h1>What Clients Say</h1>
        <p style={{color:'grey'}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>

      <div className='cards2'>
        <div className='userCard'><CardItem img={userAvatar} description={'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'} name={'Regina Miles'} profession={'Designer'}></CardItem></div>
      </div>

      <div className="textBox2">
        <h1>Download Our App</h1>
        <p style={{color:'grey'}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      
      <div className='appsCards'>
        <div className='appCard'><CardApps img = {apple} download={'Download on'} name={'App Store'}></CardApps></div>
        <div className='appCard'><CardApps img = {vector7} download={'Download on'} name={'Google Play'}></CardApps></div>
        <div className='appCard'><CardApps img = {vector8} download={'Download on'} name={'Amazon.com'}></CardApps></div>
        <div className='appCard'><CardApps img = {vector9} download={'Download on'} name={'Windows Store'}></CardApps></div>
      </div>

      <div className="textBox2">
        <h1>Pricing</h1>
        <p style={{color:'white'}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>

      <div className='cardsRow'>
        <div className='cardRow'><CardRow title={'FREE'} description={'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way '} price={'0 $'} button={'Try for free'}></CardRow></div>
        <div className='cardRow'><CardRow title={'STANDARD'} description={'Most calendars are designed for teams. Slate is designed for freelancers who want a simple way '} price={'19 $'} button={'Try for free'}></CardRow></div>
      </div>

      <div className='container2'>
        <div className='textBoxMap'>
          <h1>We Have Branches All Over The World</h1>
          <p>The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, which gave some indications about how small things do behave, produced an increasing confusion which was Heisenberg, and Born.</p>
        </div>
        <div>
          <img src={map} alt="" />
        </div>
      </div>

      <div className='container3'>
        <div>
          <img src={media} alt="" />
        </div>
        
        <div className='form'>
          <form>
            <caption>Book Appointment</caption>
            <br />
            <label htmlFor="inpName">Name *</label>
            <input id='inpName' type="text" placeholder='Full Name * '/>
            <br />
            <label htmlFor="inpName">Email address *</label>
            <input id='inpName' type="text" placeholder='example@gmail.com  '/>
            <br />
            <label htmlFor="inpName">Departement *</label>
            <select>
              <option value="">Please Select</option>
            </select>
            <br />
            <label htmlFor="inpName">Time *</label>
            <select>
              <option value="">4:00 Available</option>
            </select>
            <br />
            <button  style={{ backgroundColor: '#23A6F0', padding: '15px', color: 'white', border: 'none', borderRadius: '5px' }}>Book Appointment</button>
          </form>
        </div>
      </div>
  </>
)


export default App