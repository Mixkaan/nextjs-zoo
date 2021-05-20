// NextJS functions invoicing _____________________
import Link from 'next/link'


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