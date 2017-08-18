import {BlueButton, RedButton, PurpleButton} from '../buttons'

const style = {
  border: 1px solid black
}
const MainNavBar = () => (

  <div style={style}>
    <BlueButton/>
    <RedButton />
    <PurpleButton />
  </div>
)

export default MainNavBar;
