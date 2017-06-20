import wordCount from './wordCount'

it('counts the number of words', () => {
  const s = 'Is this 4 words?  '
  expect(wordCount(s)).toBe(4)
})
