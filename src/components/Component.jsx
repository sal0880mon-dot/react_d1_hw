
const Card=({title,description})=>(
    <>
        <h2>{title}</h2>
        <p>{description}</p>
    </>
)
const CardItem=({img,description,name,profession})=>(
    <>
        <img src={img} alt="" />
        <p>{description}</p>
        <h3>{name}</h3>
        <h5>{profession}</h5>
    </>
)

const CardApps=({img,download,name})=>(
    <>
    <div style={{display:'flex',alignItems:'center',gap:'30px'}}>
        <img src={img} alt="" />
        <div>
        <h4>{download}</h4>
        <h5>{name}</h5>
        </div>
    </div>
        
    </>
)
const CardRow=({title,description,price,button})=>(
    <>
    <div style={{display:'flex',alignItems:'center',gap:'30px'}}>
        <div style={{width:'300px'}}>
            <h2 style={{color:"#23A6F0"}}>{title}</h2>
            <p>{description}</p>
        </div>  
        <div>
            <h2 style={{color:"#23A6F0"}}>{price}</h2>
            <button style={{backgroundColor:'#23A6F0',color:'white',border:'none',borderRadius:'20px',padding:'10px'}}>{button}</button>
        </div>
    </div>
        
    </>
)

export {Card,CardItem,CardApps,CardRow}
