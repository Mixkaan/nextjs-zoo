import UserLayout from '../../components/layouts/UserLayout'

import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SencondaryButton'
import InfoButton from '../../components/buttons/InfoButton'
import SuccessButton from '../../components/buttons/SuccessButton'
import WarningButton from '../../components/buttons/WarningButton'
import DangerButton from '../../components/buttons/DangerButton'

export default function index() {

  return (

    <UserLayout>
      <div>section buttons</div>
      <PrimaryButton
        isLink={true}
        text="ola" /> >!
      <PrimaryButton
        isLink={false}
        text="este es un texto" />

      <SecondaryButton
        isLink={true}
        text="este es un texto" />

      <InfoButton
        isLink={false}
        text="info button" />

      <SuccessButton
        isLink={false}
        text="succes button" />

      <WarningButton
        isLink={false}
        text="succes button" />

      <DangerButton
        isLink={false}
        text="succes button" />

      {/* // ANOTHER SECTION */}
    </UserLayout>
  )
}