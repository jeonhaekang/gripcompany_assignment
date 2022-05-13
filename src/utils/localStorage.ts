import { IMovieItem } from 'types/Movie'

export const getBookmark = (): IMovieItem[] => {
  const bookmark = localStorage.getItem('bookmark')

  if (bookmark) {
    return JSON.parse(bookmark)
  }

  return []
}

export const addBookmark = (item: IMovieItem): IMovieItem[] => {
  const bookmark = getBookmark()

  const newBookmarkList = [...bookmark, item]
  localStorage.setItem('bookmark', JSON.stringify(newBookmarkList))

  return newBookmarkList
}

export const delBookmark = (imdbID: string): IMovieItem[] => {
  const bookmark = getBookmark()

  const newBookmarkList = bookmark.filter((item) => item.imdbID !== imdbID)
  localStorage.setItem('bookmark', JSON.stringify(newBookmarkList))

  return newBookmarkList
}

export const isBookmarked = (imdbID: string): boolean => {
  const bookmark = getBookmark()

  const result = bookmark.findIndex((item) => item.imdbID === imdbID)
  return result !== -1
}
