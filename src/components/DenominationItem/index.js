import './index.css'

const DenominationItem = props => {
  const {amountNumber, updateBalance} = props
  const {value} = amountNumber
  const onClickDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-item ">
      <button
        type="button"
        onClick={onClickDenomination}
        className="denomination-button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
