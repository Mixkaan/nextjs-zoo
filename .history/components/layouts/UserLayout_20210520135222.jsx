// React functions invoicing ------------------------------ //
import { Fragment } from 'react'
// Components invoicing ----------------------------------- //
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