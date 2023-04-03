const MatchGameTabs = props => {
  const {eachTab, onChangeTab1} = props
  const {tabId, displayText} = eachTab

  const onChangeTab = () => {
    onChangeTab1(tabId)
  }

  return (
    <li>
      <nav />
      <button type="button" onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default MatchGameTabs
