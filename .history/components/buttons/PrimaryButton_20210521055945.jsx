// NextJS functions invoicing _____________________________/>
import Link from 'next/link'


const PrimaryButton = ( props) => {

  if ( props.isLink == true) {
    return (
      <Link href={} >
        <a className="c-primary-btn">{props.text}</a>
      </Link>
    )
  }

  return (
    <button
      className="c-primary-btn"
      type={props.buttonType}>
      <p>{props.text}</p>
    </button>
  )
}

export default PrimaryButton