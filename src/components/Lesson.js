import React from 'react';

class Lesson extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false }
  };

  handleClickLesson() {
    this.setState({ isModalOpen: true });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header"></div>
            <div className="modal-introduction">
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button className="modal-close-btn">
              とじる
            </button>
          </div>
        </div>
      )
    }

    return (
      <div
        className="lesson-card"
        onClick={() => { this.handleClickLesson() }}
      >
        <div
          className="lesson-item"
          
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;