// NEXT COMPONENT INVOYCING ------------------------------- //
import Link from 'next/link'

// STYLE MODULES INVOYCING -------------------------------- //
import style from '../../sass/components/buttons/SecondaryButton.module.sass'

const SecondaryButton = ( props) => {

  if ( props.isLink == true) {
    return (
      <Link href="/" >
        <a className={style['secondary-btn']}>{props.text}</a>
      </Link>
    )
  }

  return (
    <button
      className={style['secondary-btn']}
      type={props.buttonType}>
      <p>{props.text}</p>
    </button>
  )
}

export default SecondaryButton