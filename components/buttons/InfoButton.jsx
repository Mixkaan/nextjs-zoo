// NEXT COMPONENT INVOYCING ------------------------------- //
import Link from 'next/link'

// STYLE MODULES INVOYCING -------------------------------- //
import style from '../../sass/components/buttons/InfoButton.module.sass'

const InfoButton = ( props) => {

  if ( props.isLink == true) {
    return (
      <Link href="/" >
        <a className={style['info-btn']}>{props.text}</a>
      </Link>
    )
  }

  return (
    <button
      className={style['info-btn']}
      type={props.buttonType}>
      <p>{props.text}</p>
    </button>
  )
}

export default InfoButton