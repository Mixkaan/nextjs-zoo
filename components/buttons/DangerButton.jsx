// NEXT COMPONENT INVOYCING ------------------------------- //
import Link from 'next/link'

// STYLE MODULES INVOYCING -------------------------------- //
import style from '../../sass/components/buttons/DangerButton.module.sass'

const DangerButton = ( props) => {

  if ( props.isLink == true) {

    return (

      <Link href="/" >
        <a className={style['danger-btn']}>{props.text}</a>
      </Link>
    )
  }

  return (

    <button
      className={style['danger-btn']}
      type={props.buttonType}>
      <p>{props.text}</p>
    </button>
  )
}

export default DangerButton