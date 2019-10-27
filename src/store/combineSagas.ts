/**
 * Import all SAGAS here and export them for the saga middleware
 */

function* testSaga() {
  console.log('Test saga 123...all good!')
}

const sagas = [
  testSaga,
]

export default sagas
