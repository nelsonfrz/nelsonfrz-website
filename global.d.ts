interface Article {
  id: string,
  title: string,
  date: string,
  thumbnail: string,
  description: string,
  contentHtml?: string
}

interface Project {
  id: string,
  title: string,
  thumbnail: string,
  view: string,
  github: string,
  tags: string[],
}