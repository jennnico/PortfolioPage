//https://stackoverflow.com/questions/46737933/changing-text-on-button-push-react-js?rq=1
let Grid = ReactBootstrap.Grid;
let Row = ReactBootstrap.Row;
let Col = ReactBootstrap.Col;
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const styles = {
  transition: 'all 1s ease-out'
};

//Text to appear in the body when the user clicks
const texts = [
  [''],
  ['I first learned about coding alongside my 5th graders. After 8 years teaching English as a Second Language, I decided to switch careers. Today, I am proficient in regular expressions, HTML, CSS, JavaScript, jQuery, and ReactJS'],
  ['Work samples are available on my GitHub page: https://github.com/jennnico'],
  ['Please contact me on LinkedIn.'],
];

class Content extends React.Component{

//Set the state. Body is empty to begin.
constructor(props){
 super(props);
  this.state = {
      clickedText: [''],
      opacity: 0
    }
}
 
  //Set the state with a new text, based on index
  handleClick = (i) => {
        this.setState({ clickedText: texts[i], opacity: 1 });
  };
 

 render(){
    const { clickedText } = this.state;
    return(
      <div>
        {/* navigation buttons */} 
        <button key={3} onClick={() => this.handleClick(3)}>Contact</button>
        <button key={2} onClick={() => this.handleClick(2)}>Portfolio</button>
        <button key={1} onClick={() => this.handleClick(1)}>About</button>
        <button key={0} onClick={() => this.handleClick(0)}>Home</button>
        <br/>
      
        {/* Content */}
<Grid>
  <Row  className="show-grid">
      <Col md={6} mdPush={6}>
        <ul>
          {clickedText.map((t, i) => (
            <div> 
              {/* Heading */}
              <li id = "name" className = "body"><h1>Jennifer Grace</h1></li>
              <li className = "body"><h2>Front-End Developer</h2></li>

              {/* Fade-in text... not working yet */}
              <ReactCSSTransitionGroup
                   transitionName="fade"
                   transitionEnter={300}
                   transitionLeave={500}>
                {/* Text to fade in/out */}
                
              <li className = "body" className = "text" style={{...styles, opacity: this.state.opacity}} key={`text-${i}`}>{t}</li> 
              </ReactCSSTransitionGroup>
           
              </div>
          ))}
       </ul>
    </Col>
    {/* 2nd column: photo */}
    <Col md={6} mdPull={6}>
      <img id="photo" alt="" src = 'https://lh3.googleusercontent.com/BXUiAqbmNM-b5zE2H6nRjqpmdYCcbkK23XHEAxxenkj5Yzp9KXbYMsbRv2-ChTv98xXTqG1UskLOX0LAAHJsn77qN1gbPHC_clwqDrd1uqHH0H0HMUcSWmwHgJmWWajHYFZawaOQWw' />
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
