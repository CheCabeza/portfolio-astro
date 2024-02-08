export interface Resume {
  $schema: string
  basics: Basics
  work: Work[]
  education: Education[]
  certificates: Certificate[]
  skills: Skill[]
  languages: Language[]
  interests: Interest[]
  meta: Meta
}

interface Basics {
  name: string
  label: string
  email: string
  phone: string
  github: string
  summary: string
  location: Location
  profiles: Profile[]
}

interface Location {
  city: string
  countryCode: string
  region: string
}

interface Profile {
  network: string
  url: string
}

interface Work {
  name: string
  location: string
  position: string
  url?: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
}

interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: string
  endDate: string
}

interface Certificate {
  name: string
  issuer: string
  url: string
}

interface Skill {
  name: string
  keywords: string[]
}

interface Language {
  language: string
  fluency: string
}

interface Interest {
  name: string
}

interface Meta {
  canonical: string
  version: string
  lastModified: string
  theme: string
}
