interface Article {
  id: string,
  title: string,
  date: string,
  thumbnail: string,
  thumbnailSourceUrl: string,
  thumbnailSourceName: string,
  description: string,
  content: string
}

interface Project {
  id: string,
  title: string,
  date: string,
  thumbnail: string,
  view: string,
  github: string,
  tags: string[],
}