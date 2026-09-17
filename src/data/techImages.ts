const devicon = (technology: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology}/${technology}-original.svg`

export const techImages = {
  html: devicon('html5'),
  css: devicon('css3'),
  figma: devicon('figma'),
  react: devicon('react'),
  bootstrap: devicon('bootstrap'),
  javascript: devicon('javascript'),
  typescript: devicon('typescript'),
} as const
