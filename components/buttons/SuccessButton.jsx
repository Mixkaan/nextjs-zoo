// NEXT COMPONENT INVOYCING ------------------------------- //
import Link from 'next/link'

// STYLE MODULES INVOYCING -------------------------------- //
import style from '../../sass/components/buttons/SuccessButton.module.sass'

const SuccessButton = ( props) => {

  if ( props.isLink == true) {

    return (

      <Link href="/" >
        <a className={style['success-btn']}>{props.text}</a>
      </Link>
    )
  }

  return (

    <button
      className={style['success-btn']}
      type={props.buttonType}>
      <p>{props.text}</p>
    </button>
  )
}

export default SuccessButton