import { graphql, useStaticQuery } from 'gatsby'

export const useVocabularyData = (code: string, languageCode: string) => {
  const data = useStaticQuery(graphql`
    query VocabularyQuery {
      cms {
        vocabulary {
          code
          translations {
            languages_code {
              code
              prefix
            }
            label
          }
        }
      }
    }
  `)

  if (!code) {
    return false
  }

  const vocabulary = data.cms.vocabulary.find((term: any) => term.code === code)

  if (!vocabulary) {
    return ''
  }

  const translations = vocabulary.translations.filter(
    (t: any) => t.languages_code.code == languageCode,
  )[0] as any

  if (!translations) {
    return ''
  }

  return translations.label
}
