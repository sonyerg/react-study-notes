class MyMagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: "",
      userInput: "",
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 3),
        userInput: "",
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  render() {
    const possibleAnswers = [Yes, No, Maybe];
    const answer = possibleAnswers[this.randomIndex];
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.userInput}
        />
        <br />
        <button onClick={this.ask}>Ask Question!</button>
        <br />
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}
