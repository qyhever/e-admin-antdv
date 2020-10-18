import initAnt from './ant'
import initConstant from './constant'
import initMethod from './method'

export default function(app) {
  initAnt(app)
  initConstant(app)
  initMethod(app)
}
