// NEXT COMPONENT INVOYCING ------------------------------- //
import Link from 'next/link'

// STYLE MODULES INVOYCING -------------------------------- //
import style from '../../sass/components/buttons/WarningButton.module.sass'

const WarningButton = ( props) => {

  if ( props.isLink == true) {

    return (

      <Link href="/" >
        <a className={style['warning-btn']}>{props.text}</a>
      </Link>
    )
  }

  return (

    <button
      className={style['warning-btn']}
      type={props.buttonType}>
      <p>{props.text}</p>
    </button>
  )
}

export default WarningButton