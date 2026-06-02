import { useEffect } from 'react'
import { content } from './content'

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    const handleAnchorClick = (event) => {
      event.preventDefault()
      const target = document.querySelector(event.currentTarget.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    const sections = document.querySelectorAll('section[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <div className="font-body-md overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-surface/70 backdrop-blur-xl shadow-[0_0_20px_rgba(0,242,254,0.1)]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
            <span className="font-display text-headline-md font-extrabold text-primary-container tracking-tighter">
              {content.meta.brand}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {content.nav.items.map((item) => (
              <a
                key={item.label}
                className={`text-label-sm font-label-sm ${
                  item.active
                    ? 'text-primary-container font-bold border-b-2 border-primary-container pb-1'
                    : 'text-on-surface-variant font-medium hover:text-primary-container transition-colors'
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <a
              className="px-6 py-2 bg-primary-container text-on-primary font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-300"
              href={content.nav.cta.href}
            >
              {content.nav.cta.label}
            </a>
          </nav>
          <button className="md:hidden text-primary-container" type="button">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main>
        <section
          className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-all duration-1000 opacity-0 translate-y-10"
          id="inicio"
          data-reveal
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-on-tertiary-container/10 blur-[120px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-primary-container mb-4 tracking-widest uppercase">
                {content.hero.role}
              </span>
              <h1 className="font-display text-headline-lg-mobile md:text-display text-on-surface mb-6 leading-none">
                {content.hero.firstName}{' '}
                <span className="text-primary-container glow-text">
                  {content.hero.lastName}
                </span>
              </h1>
              <p className="font-headline-md text-headline-md text-on-surface-variant mb-8 max-w-2xl border-l-4 border-primary-container pl-6">
                {content.hero.focus}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface/80 mb-10 max-w-xl">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="px-8 py-4 bg-primary-container text-on-primary font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 flex items-center gap-2"
                  href={content.hero.primaryCta.href}
                >
                  {content.hero.primaryCta.label}{' '}
                  <span className="material-symbols-outlined">
                    {content.hero.primaryCta.icon}
                  </span>
                </a>
                <a
                  className="px-8 py-4 border border-outline-variant text-on-surface font-bold rounded-lg hover:bg-white/5 transition-all"
                  href={content.hero.secondaryCta.href}
                >
                  {content.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-section-gap transition-all duration-1000 opacity-0 translate-y-10"
          id="sobre"
          data-reveal
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass p-4">
                  <img
                    alt={content.about.image.alt}
                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                    data-alt={content.about.image.description}
                    src={content.about.image.src}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl border-primary-container/20">
                  <span className="block text-primary-container font-display text-headline-lg">
                    {content.about.badge.value}
                  </span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">
                    {content.about.badge.label}
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-display text-headline-lg text-on-surface mb-8">
                  {content.about.title}
                </h2>
                <div className="space-y-6 text-body-lg text-on-surface/70">
                  {content.about.paragraphs.map((paragraph, index) => (
                    <p key={`about-${index}`}>
                      {typeof paragraph === 'string'
                        ? paragraph
                        : paragraph.parts.map((part, partIndex) =>
                            typeof part === 'string' ? (
                              <span key={`part-${partIndex}`}>{part}</span>
                            ) : (
                              <span
                                key={`part-${partIndex}`}
                                className={part.className}
                              >
                                {part.text}
                              </span>
                            ),
                          )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-section-gap bg-surface-container-lowest transition-all duration-1000 opacity-0 translate-y-10"
          data-reveal
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-display text-headline-lg text-on-surface mb-4">
                {content.interests.title}
              </h2>
              <div className="h-1 w-24 bg-primary-container mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              {content.interests.items.map((item) => (
                <div
                  key={item.title}
                  className={`glass p-8 rounded-2xl glow-hover flex flex-col items-start ${
                    item.span || ''
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${item.iconColor} text-4xl mb-4`}
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-2">
                    {item.title}
                  </h3>
                  <p className={item.textClass || 'text-on-surface-variant'}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-section-gap transition-all duration-1000 opacity-0 translate-y-10"
          id="projetos"
          data-reveal
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="font-display text-headline-lg text-on-surface mb-2">
                  {content.projects.title}
                </h2>
                <p className="text-on-surface-variant text-body-lg">
                  {content.projects.subtitle}
                </p>
              </div>
              <div className="h-px flex-grow mx-8 bg-outline-variant hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.projects.items.map((project) => (
                <div
                  key={project.title}
                  className="group glass rounded-2xl overflow-hidden glow-hover transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      data-alt={project.dataAlt}
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                    <span
                      className={`absolute bottom-4 left-4 px-3 py-1 ${project.tagClass} text-label-sm font-label-sm rounded-full`}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary-container transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant mb-6 font-body-md">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-label-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-section-gap relative overflow-hidden transition-all duration-1000 opacity-0 translate-y-10"
          id="habilidades"
          data-reveal
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <h2 className="font-display text-headline-lg text-on-surface mb-16">
              {content.skills.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {content.skills.columns.map((column) => (
                <div key={column.title} className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`material-symbols-outlined ${column.iconColor}`}
                    >
                      {column.icon}
                    </span>
                    <h4 className="font-headline-md text-headline-md">
                      {column.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {column.items.map((item) => (
                      <span
                        key={item}
                        className={`glass px-4 py-2 rounded-lg font-label-sm text-label-sm border-l-2 ${
                          column.border
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-section-gap bg-surface-container-lowest/50 transition-all duration-1000 opacity-0 translate-y-10"
          data-reveal
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-display text-headline-lg text-on-surface mb-16 text-center">
              {content.timeline.title}
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-1/2"></div>
              {content.timeline.items.map((item, index) => {
                const isLeft = item.side === 'left'
                const alignClasses = isLeft
                  ? 'md:w-5/12 ml-10 md:ml-0 md:text-right'
                  : 'md:w-5/12 ml-10 md:ml-0'
                const spacerClasses = isLeft ? 'md:w-5/12 hidden md:block' : ''

                return (
                  <div
                    key={item.title}
                    className={`relative ${index < content.timeline.items.length - 1 ? 'mb-20' : ''}`}
                  >
                    <div className="md:flex items-center justify-between">
                      {isLeft ? (
                        <div className={alignClasses}>
                          <span
                            className={`font-label-sm text-label-sm ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                          <h4 className="font-headline-md text-headline-md mt-1 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-on-surface-variant">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div className={spacerClasses}></div>
                      )}

                      <div
                        className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full ${item.dotColor} border-4 border-surface -translate-x-1/2 z-10`}
                      ></div>

                      {!isLeft ? (
                        <div className={alignClasses}>
                          <span
                            className={`font-label-sm text-label-sm ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                          <h4 className="font-headline-md text-headline-md mt-1 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-on-surface-variant">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div className="md:w-5/12 hidden md:block"></div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className="py-section-gap transition-all duration-1000 opacity-0 translate-y-10"
          data-reveal
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="glass p-12 rounded-2xl border-primary-container/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10 max-w-3xl">
                <span className="material-symbols-outlined text-primary-container text-5xl mb-6">
                  {content.seeking.icon}
                </span>
                <h2 className="font-display text-headline-lg text-on-surface mb-6">
                  {content.seeking.title}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {content.seeking.text.parts.map((part, index) =>
                    typeof part === 'string' ? (
                      <span key={`seeking-${index}`}>{part}</span>
                    ) : (
                      <span key={`seeking-${index}`} className={part.className}>
                        {part.text}
                      </span>
                    ),
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-section-gap transition-all duration-1000 opacity-0 translate-y-10"
          id="contato"
          data-reveal
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
              <div>
                <h2 className="font-display text-headline-lg text-on-surface mb-6">
                  {content.contact.title}
                </h2>
                <p className="text-on-surface-variant text-body-lg mb-10">
                  {content.contact.subtitle}
                </p>
                <div className="space-y-8">
                  {content.contact.info.map((info) =>
                    info.href ? (
                      <a
                        key={info.label}
                        className="flex items-center gap-6 group"
                        href={info.href}
                      >
                        <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-primary-container/10 transition-colors">
                          <span className="material-symbols-outlined text-primary-container">
                            {info.icon}
                          </span>
                        </div>
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                            {info.label}
                          </p>
                          <p className="font-body-lg text-on-surface group-hover:text-primary-container transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div key={info.label} className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-full glass flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary-container">
                            {info.icon}
                          </span>
                        </div>
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                            {info.label}
                          </p>
                          <p className="font-body-lg text-on-surface">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div className="flex gap-4 mt-12">
                  {content.contact.socials.map((social) => (
                    <a
                      key={social.icon}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary-container hover:scale-110 transition-all"
                      href={social.href}
                    >
                      <span className="material-symbols-outlined">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="glass p-10 rounded-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        {content.contact.form.fields.name.label}
                      </label>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:border-primary-container focus:ring-0 transition-all"
                        placeholder={content.contact.form.fields.name.placeholder}
                        type={content.contact.form.fields.name.type}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">
                        {content.contact.form.fields.email.label}
                      </label>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:border-primary-container focus:ring-0 transition-all"
                        placeholder={content.contact.form.fields.email.placeholder}
                        type={content.contact.form.fields.email.type}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">
                      {content.contact.form.fields.message.label}
                    </label>
                    <textarea
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:border-primary-container focus:ring-0 transition-all"
                      placeholder={content.contact.form.fields.message.placeholder}
                      rows={4}
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" type="submit">
                    {content.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-section-gap border-t border-outline-variant bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter">
          <div className="text-center md:text-left">
            <p className="font-code-md text-primary-container mb-2 text-headline-md tracking-tighter">
              {content.meta.brand}
            </p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              {content.footer.copyright}
            </p>
          </div>
          <div className="flex gap-8">
            {content.footer.links.map((link) => (
              <a
                key={link.label}
                className="text-on-surface-variant hover:text-primary-container font-label-sm text-label-sm transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
