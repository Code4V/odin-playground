import PropTypes from 'prop-types';
import React from 'react'

// interface Props {
//   text?: string;
// }

// const RenderNewProp = ({text = 'Vash'}: Props) => {
//   return <h1>{text}</h1>
// }

const RenderName = (props) => {
  return (
    <div>{props.name}</div>
  )
}

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
  name: 'Vash',
}


export default RenderName;


