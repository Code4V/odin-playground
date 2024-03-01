import Rivas from './../assets/Rivas.jpg';
import '../stylus/Profile.styl'


export const Profile = (props) => {
  
  return (
    <div className="profile">
      <div className="profile__pic">
        <img src={ Rivas } alt="Profile Picture" />
      </div>
      <div className="profile__info">
        <p className="profile__name"> { props.name } </p>
        <p className="profile__position"> { props.position } </p>
      </div>

    </div>
  )
}