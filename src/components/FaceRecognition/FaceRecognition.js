import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {

	const boundingBoxes = boxes.map((box, index) => {
  		return <div className='bounding-box' key={index}  style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
  	})
    	
  	return (
    	<div className='center ma'>
      		<div className='absolute mt2'>
        		<img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        		{boxes.length >0 && boundingBoxes}
      		</div>
    	</div>
  );	
  
}

export default FaceRecognition;