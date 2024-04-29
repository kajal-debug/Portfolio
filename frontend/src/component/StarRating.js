import React from 'react';
import Rating from 'react-rating-stars-component';

function StarRating({ value, onChange }) {
  return (
    <div style={{margin: "-7px 0px 0px 4px"}}>
      <Rating
        count={5}
        value={value} 
        // onChange={onChange} 
        size={24} 
        activeColor="#f1c40f"
        edit={false}
        isHalf={true}
      />
    </div>
  );
}

export default StarRating;
