import './index.css'
function App(props) {
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.img} alt="myPic" className="card__img"/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sName}</h3>
          <a href={props.link} rel="noreferrer" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
