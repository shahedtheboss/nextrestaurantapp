import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/Item.css'
import '../styles/Products.css'
import '../styles/Slider.css'
import '../styles/Checkout.css'
import '../styles/Login.css'
import '../styles/Admin.css'
import {Provider} from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
