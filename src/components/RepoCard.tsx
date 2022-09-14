import React, { useState } from 'react'
import { useActions, useAppSelector } from '../hooks'
import { IRepo } from '../models/models'

function RepoCard({repo}: {repo: IRepo}) {
  const {addFavorite, removeFavorite} = useActions()
  const {favorites} = useAppSelector(state => state.github)
  
  const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url))

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsFavorite(true)
    addFavorite(repo.html_url)
  }

  const removeFromFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsFavorite(false)
    removeFavorite(repo.html_url)
  }

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
      <a href={repo.html_url} target='_blank'>
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className='text-sm'>
          Forks: <span className='font-bold'>{repo.forks}</span>
          Watchers: <span className='font-bold'>{repo.watchers}</span>
        </p>
        <p className='text-sm font-thin'>{repo?.description}</p>
        { !isFavorite && <button 
          className='py-2 px-2 bg-yellow-400 rounded mr-2 hover:shadow-md transition-all'
          onClick={addToFavorites}
        >
          To favorites
        </button>}
        { isFavorite && <button 
          className='py-2 px-2 bg-red-400 rounded hover:shadow-md transition-all'
          onClick={removeFromFavorites}
        >
          Remove favorites
        </button>}
      </a>
    </div>
  )
}

export default RepoCard