import uuid from 'uuid'

export default function authorsReducer(state = [], action) {
  let idx
  let existingAuthor
  switch (action.type) {

    case "ADD_AUTHOR":
    existingAuthor = state.filter(author => author.authorName === action.author.authorName)
    if (existingAuthor.length > 0) {
      return state
    } else {
      return [...state, { authorName: action.author.authorName, id: uuid() }]
    }

    case "REMOVE_AUTHOR":
      idx = state.authors.indexOf(action.id);
      return [...state.slice(0, idx), state.slice(idx + 1)]

    case "ADD_BOOK":
      existingAuthor = state.filter(author => author.authorName === action.book.authorName)
      if (existingAuthor.length > 0) {
        return state
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }]
      }

    default:
      return state;

  }
}
