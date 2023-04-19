import React from 'react'
import NewsSnippet from './NewsSnippet'

export default function Results({results}) {
  return (
    results.map(result => {
        return <NewsSnippet key={result.objectID} result={result} />
    })
  )
}
