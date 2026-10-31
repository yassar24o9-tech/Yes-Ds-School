function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = 'h2',
  id,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <Heading className="section-heading__title" id={id}>{title}</Heading>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}

export default SectionHeading
