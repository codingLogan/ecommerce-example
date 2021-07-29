import React from 'react'
import PropTypes from 'prop-types'

function Rating({ value, text, color }) {
  return (
    <div className='rating'>
      <span>
        <Star color={color} value={value} max={1} />
        <Star color={color} value={value} max={2} />
        <Star color={color} value={value} max={3} />
        <Star color={color} value={value} max={4} />
        <Star color={color} value={value} max={5} />
      </span>
      <span>{text && text}</span>
    </div>
  )
}

// You can also set defaults by doing
Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

function Star({ value, max, color }) {
  const fullStar = 'fas fa-star'
  const halfStar = 'fas fa-star-half-alt'
  const emptyStar = 'far fa-star'

  return (
    <i
      style={{ color }}
      className={
        value >= max ? fullStar : value >= max - 0.5 ? halfStar : emptyStar
      }
    ></i>
  )
}

export default Rating
