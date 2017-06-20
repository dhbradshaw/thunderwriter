const wordCount = text => {
  const matches = text.match(/\S+/g)
  return matches ? matches.length : 0
}

export default wordCount
