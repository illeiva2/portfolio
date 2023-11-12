export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Full Stack Developer | Cybersecurity | Testing | Networking
      </p>
      <div className="about-me__body">
        <p>
          Hey there! I&apos;m Ivan Leiva, a Full Stack Developer with a passion
          for creating tech solutions. Here&apos;s a quick peek into who I am:
        </p>
        <p>
          I&apos;m all about keeping your digital world safe. With a
          cybersecurity background, I&apos;m your go-to person for protecting
          your data and privacy. I&apos;m a perfectionist when it comes to
          making sure your software works like a charm. Manual or automated,
          testing is my forte.
        </p>
        <p>
          Networking is where I lay the groundwork for seamless and reliable
          apps. I understand how systems talk to each other, ensuring everything
          runs smoothly. In a nutshell, I&apos;m a tech enthusiast on a mission
          to deliver top-notch solutions. Let&apos;s connect and make amazing
          things happen together!
        </p>
      </div>
      <img
        src="images/wia.png"
        alt="Ivan Leiva in a winter morning"
        className="about-me__img"
      />
    </section>
  );
}
