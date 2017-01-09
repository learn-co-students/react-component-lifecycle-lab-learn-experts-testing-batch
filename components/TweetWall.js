const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.state.tweets = this.props.newTweets
  }

  shouldComponentUpdate(nextProps){
    return nextProps.newTweets.length > 0
  }

  componentWillReceiveProps(nextProps){
    const tweetsNow = this.state.tweets
    this.setState({
      tweets: nextProps.newTweets.concat(tweetsNow)
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
