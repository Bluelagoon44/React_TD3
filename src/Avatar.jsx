const Avatar = (props) => {
  return (
    <img src={props.path} alt="yolo" style={{width:"200px", height:"50px", objectFit:"cover"}}/>
  )
}

export default Avatar