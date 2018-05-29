import React from 'react';

export default (props) =>  {
  const randomNum = () => {
    return (Math.random() * 100).toString();
  }
  return (
     <video autoPlay width="600px" height="350px" key={props.name + randomNum()} src={props.src} type="video/mp4"/>
  );
}
