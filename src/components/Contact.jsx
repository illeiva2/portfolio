export default function Contact() {
  return (
    <footer className="footer">
      <a href="mailto:illeiva@outlook.com" className="footer__link">
        illeiva@outlook.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://codepen.io/illeiva">
            <i className="fab fa-codepen" />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/illeiva/"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com/illeiva2">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/illeiva2">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
