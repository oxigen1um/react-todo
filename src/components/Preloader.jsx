import React from 'react';

class Preloader extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hidden: false
    };
  }
  
  componentDidMount() {
    window.addEventListener('load', () => {setTimeout(() => {this.setState({ hidden: true })}, 1000)});
  }
  
  renderPreloader() {
    return (
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  
  render() {
    return this.state.hidden ? false : this.renderPreloader();
  }
}

export default Preloader;