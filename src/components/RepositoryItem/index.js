// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails

  return (
    <li className="repo-item-card">
      <img src={avatarUrl} className="avatar-style" alt={name} />
      <h1 className="repo-name">{name}</h1>

      <div className="star-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="star-style"
          alt="stars"
        />
        <p className="text-style">{`${starsCount} stars`}</p>
      </div>

      <div className="star-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="star-style"
          alt="forks"
        />
        <p className="text-style">{`${forksCount} forks`}</p>
      </div>

      <div className="star-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="star-style"
          alt="open issues"
        />
        <p className="text-style">{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
