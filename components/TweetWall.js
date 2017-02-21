const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
      this.setState({
          tweets: this.props.newTweets
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
      return (nextProps.newTweets > 0);
  }

  componentWillReceiveProps(nextProps) {
      let allTweets = [...nextProps.newTweets, ...this.state.tweets];

      this.setState({
          tweets: allTweets
      })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
