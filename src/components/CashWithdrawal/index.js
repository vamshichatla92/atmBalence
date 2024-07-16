import {useState} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const [balance, setBalence] = useState(2000)

  const updateBalance = value => {
    if (balance > 0) {
      setBalence(prevState => prevState - value)
    }
  }

  const name = 'Sarah Williams'
  const initial = name.slice(0, 1)
  console.log(name)

  return (
    <div className="app-container">
      <div className="cash-withdraw-container">
        <div className="user-details-container">
          <div className="initial-container">
            <p className="initial">{initial}</p>
          </div>
          <p>{name}</p>
        </div>
        <div className="balance-container">
          <p className="your-balance">Your Balance</p>
          <p className="balance">{balance}</p>
        </div>
        <div className="withdraw-container">
          <p className="withdraw">Withdraw</p>
          <p className="choose-amt">CHOOSE SUM (IN RUPEES)</p>
          <div className="amounts-container">
            <ul className="amount-list">
              {denominationsList.map(eachAmount => (
                <DenominationItem
                  updateBalance={updateBalance}
                  key={eachAmount.id}
                  amountNumber={eachAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CashWithdrawal
