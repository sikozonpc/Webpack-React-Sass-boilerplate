import App from './App'
import { connect } from 'react-redux';
import { IStore } from 'store/types';

const mapStateToProps = (state: IStore) => ({
  data: state.testReducer.data,
})

export default connect(mapStateToProps)(App)
