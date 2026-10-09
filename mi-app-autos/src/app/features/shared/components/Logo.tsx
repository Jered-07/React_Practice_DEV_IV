import "../../../../styles/Logo.css"

const Logo = () => {
  return (
    <div className="logo" aria-label="J Motors">
      <span className="logo__mark" aria-hidden="true">
        <span className="logo__letter">J</span>
      </span>
      <span className="logo__text" aria-hidden="true">
        Motors<small>Costa Rica</small>
      </span>
    </div>
  )
}

export default Logo
