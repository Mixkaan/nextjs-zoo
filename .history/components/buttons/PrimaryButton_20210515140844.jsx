import Link from 'next/link'

// STYLE MODULES INVOYCING -------------------------------- //
import style from '../../sass/components/buttons/PrimaryButton.module.sass'

const PrimaryButton = ( props) => {

  if ( props.isLink == true) {
    return (
      <Link href="/" >
        <a className={style['primary-btn']}>{props.text}</a>
      </Link>
    )
  }

  return (
    <button
      className={style['primary-btn']}
      type={props.buttonType}>
      <p>{props.text}</p>
    </button>
  )
}

export default PrimaryButton