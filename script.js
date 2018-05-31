//https://stackoverflow.com/questions/46737933/changing-text-on-button-push-react-js?rq=1
let Grid = ReactBootstrap.Grid;
let Row = ReactBootstrap.Row;
let Col = ReactBootstrap.Col;
let code = ReactBootstrap.code;

const texts = [
  ['Front-End Developer'],
  ['Text 2'],
  ['Text 3'],
  ['Text 4'],
];

class Content extends React.Component{

//set the state
constructor(props){
 super(props);
  this.state = {
      clickedText: ['Front-End Developer']
    }
}
 
  //set the state when you click
  handleClick = (i) => {
        this.setState({ clickedText: texts[i] });
  };
 

 render(){
    const { clickedText } = this.state;
    return(
      <div>
        <button key={3} onClick={() => this.handleClick(3)}>Contact</button>
        <button key={2} onClick={() => this.handleClick(2)}>Portfolio</button>
        <button key={1} onClick={() => this.handleClick(1)}>About</button>
        <button key={0} onClick={() => this.handleClick(0)}>Home</button>
        <br/>
          
<Grid>
  <Row  className="show-grid">
      <Col md={6} mdPush={6}>
        <ul>
          {clickedText.map((t, i) => (
            <div>
              <li id = "name"><h1>Jennifer Grace</h1></li>
            <li key={`text-${i}`}>{t}</li></div>
          ))}
       </ul>
    </Col>  
    <Col md={6} mdPull={6}>
      <h1>Move image here!</h1>
    </Col>       
  </Row>
 </Grid>
        
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Content></Content>
  </div>, document.getElementById('root'))
