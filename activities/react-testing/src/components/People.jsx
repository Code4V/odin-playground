import PropTypes from 'prop-types'
import { Outlet, useParams } from 'react-router-dom';
import people from '../datas/people';

function People({ person }) {
  const { id } = useParams();

  console.log(person)
  if (person === undefined && people[parseInt(id)] !== undefined) {
    person = people[parseInt(id)];
  }
  else {
    person = {
      email: "Mclain@mail.com",
      name: "John Mclain",
      image: "https://picsum.photos/50",
    }
  }

  return (
        <li key={person.email} className="flex py-4">
          <img className="w-10 h-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
  )
}

People.propTypes = {  
  person: PropTypes.exact({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  })
}

export default People;
