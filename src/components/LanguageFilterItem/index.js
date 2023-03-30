// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, setActiveLanguageFilterId, isActive} = props
  const {id, language} = languageDetails

  const itemClassName = isActive ? 'active-btn item-btn' : 'item-btn'

  const onClickLanguageFilter = () => setActiveLanguageFilterId(id)

  return (
    <li className="list-item">
      <button
        onClick={onClickLanguageFilter}
        className={itemClassName}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
