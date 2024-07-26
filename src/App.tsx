import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useMainContract } from './hooks/useMainContract'
import { useTonConnect } from './hooks/useTonConnect';

function App() {
  const {
    counter_value,
    //recent_address,
    //owner_address,
    contract_address,
    contract_balance,
    sendIncrement,
    sendWithdrawRequest
  } = useMainContract();
  const { connected } = useTonConnect();
  return (
    <div>
      <div>
      <TonConnectButton />
      </div>
      <div>
        <div className='card'>
          <b>Contract Address: </b>
          <div className='hint'>{contract_address?.slice(0, 30) + "..."}</div>
          <b>Contract Balance:</b>
          <div className='hint'>{contract_balance}</div>
        </div>

        <div className='card'>
          <b>Counter Value:</b>
          <div className='hint'>{counter_value ?? 'loading...'}</div>
        </div>

        {
          connected && <a style={{cursor: "pointer"}} onClick={() => {
            sendIncrement()
          }}>Increment</a>
        }

<br /><br />
         { connected && <a style={{cursor: "pointer"}} onClick={() => {
            sendWithdrawRequest()
          }}>Request Withdrawal</a>
        }
      </div>
    </div>
  )
}

export default App
