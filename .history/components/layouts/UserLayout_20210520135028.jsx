// REACT FUNCTIONS invoicing ------------------------------ //
import { Fragment } from 'react'

// COMPONENTS INVOYCING ----------------------------------- //
import UserNav from '../1-partials/navigation/UserNav'

const UserLayout = ( props) => {

  return (

    <Fragment>
      <UserNav />
      { props.children }
    </Fragment>
  )
}

export default UserLayout