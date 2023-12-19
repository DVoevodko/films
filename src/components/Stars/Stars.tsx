import {Star} from './Star'

type TCount = {
  count : number
}
export const Stars = ({count}: TCount) => {
  return (
    <div className="main-content">
      <ul className="card-body-stars u-clearfix">
        <li>
          {(count === 1)?<><Star /></>:''}
          {(count === 2)?<><Star /><Star /></>:''}
          {(count === 3)?<><Star /><Star /><Star /></>:''}
          {(count === 4)?<><Star /><Star /><Star /><Star /></>:''}
          {(count === 5)?<><Star /><Star /><Star /><Star /><Star /></>:''}
        </li>
      </ul>
    </div>
  )
}
