import NewsFetch from './NewsFetch'

function News({parentstyles,childstyles}) {
  return (
    <div className={parentstyles} >
        <NewsFetch styles={childstyles}/>
    </div>
  )
}

export default News