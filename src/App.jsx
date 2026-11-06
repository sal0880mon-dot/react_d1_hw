import './App.css'
import img from './assets/img.png'
import img2 from './assets/Img (1).png'
import icon1 from './assets/icon.png'
import icon2 from './assets/icon (1).png'
import icon3 from './assets/icon (2).png'
import avatar from './assets/Avatar.png'

const App = () => (
  <>
    <div className='header'>
      <div><span style={{ fontSize: 'xx-large', fontWeight: '800' }}>beauty</span><span style={{ color: '#69B99D', fontSize: 'xx-large', fontWeight: '800' }}>salon</span><span style={{ fontSize: 'xx-large', fontWeight: '600' }}>.</span></div>
      <div className='sessoes'>
        <p>Início</p>
        <p>Sobre</p>
        <p>Serviços</p>
        <p>Depoimentos</p>
        <p>Contato</p>
      </div>
    </div>

    <div className='container'>

      <div className='textBox'>
        <h1>Saúde natural para os seus cabelos</h1>
        <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
        <button style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#69B99D', color: 'white', border: 'none' }}>Agendar um  horário</button>
      </div>

      <div style={{ width: '30%' }}>
        <div style={{ width: '500px' }}><img width={'100%'} src={img} alt="" /></div>
      </div>
    </div>

    <div className='Sobrenós'>
      <div style={{ width: '500px' }}><img width={'100%'} src={img2} alt="" /></div>
      <div className='textBox2'>
        <h1>Sobre nós</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. </p>
        <p>In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. </p>
        <p>Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.</p>
      </div>
    </div>

    <div className='Serviços'>
      <div className='textBox3'>
        <h1>Serviços</h1>
        <p>Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
      </div>

      <div className='cards'>
        <div className='card1'>
          <img src={icon1} alt="" />
          <h2>Terapia capilar</h2>
          <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
        </div>
        <div className='card1'>
          <img src={icon2} alt="" />
          <h2>Terapia capilar</h2>
          <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
        </div>
        <div className='card1'>
          <img src={icon3} alt="" />
          <h2>Terapia capilar</h2>
          <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
        </div>
      </div>
      <div className='title'>
        <div className='textBox4'>
          <h1>Depoimentos de quem já passou por aqui</h1>
        </div>
        <div className='box1'>
          <div className='textCard1'>
            <p>Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.</p>
            <img src={avatar} alt="" />
          </div>
          <div className='textCard1'>
            <p>Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.</p>
            <img src={avatar} alt="" />
          </div>
        </div>

      </div>
      <div className='container2'>
        <div className='textBox_1'>
          <h1>Entre em contato com a gente!</h1>
          <p style={{color:'grey'}}>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
          <button style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#69B99D', color: 'white', border: 'none' }}>Entrar em contato</button>
        </div>
        <div className='textBox_2'>
          <p>11 99845-6754</p>
          <p>R. Amauri Souza, 346</p>
          <p>contato@beautysalon.com</p>
        </div>
      </div>
    </div>

    <div className='footer'>
      <div>
        <span style={{ fontSize: 'xx-large', fontWeight: '800' }}>beauty</span><span style={{ color: '#69B99D', fontSize: 'xx-large', fontWeight: '800' }}>salon</span><span style={{ fontSize: 'xx-large', fontWeight: '600' }}>.</span>
        <p>©2021 Beautysalon.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </>

)

export default App