import React from 'react';
import Lesson from './Lesson'

class Main extends React.Component{
  render() {
    const lessonItem = {
      name: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
    }
    return (
      <div className="main-wrapper">
        <div className="main">
          <div className="copy-container">
            <h1>hello, world.</h1>
            <h2>プログラミングの世界へようこそ！</h2>
          </div>
          <div className="lesson-container">
            <h3 className="section-title">学べるレッスン</h3>
          </div>
          <Lesson
            name={lessonItem.name}
            image={lessonItem.image}
          />
        </div>
      </div>
    );
  }
}

export default Main;