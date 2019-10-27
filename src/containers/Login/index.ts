import Login from './Login'
import { connect } from 'react-redux';
import { IStore } from 'store/types';

const mapStateToProps = (state: IStore) => {
  return {
    data: state.testReducer.data,
  }
}

export default connect(mapStateToProps)(Login)
