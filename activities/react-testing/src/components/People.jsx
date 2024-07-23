import PropTypes from 'prop-types'

function People({ people }) {
  return (
    <ul className="w-72 divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

People.propTypes = {
  people: PropTypes.arrayOf(PropTypes.exact({
    image: PropTypes.string,
    person: PropTypes.string,
    email: PropTypes.string,
  }))
}

export default People;
