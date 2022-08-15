const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className = "inactive">
        Not yet Rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings/data.place.comments.length)
      for (let i=0; i<averageRating;i++){
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <input type="submit" className="btn btn-danger" value = "Delete Comment" />
            </form>
          </div>
        )
      })
    }
    return (
        <Def>       
          <main>
            <div className = "row">
                <div className = "col-sm-6">   
            <img  className = "col-sm-6" src = {data.place.pic} alt={data.place.name} />
            <h3>
                Located in {data.place.city}, {data.place.state}
            </h3>
            </div>
            <div className = "col-sm-6">
             <h1>{data.place.name}</h1>   
                <h2>Rating</h2>
                {rating}
                <br />
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h3>Cuisines</h3>
                 Serving {data.place.cuisines}
                <br />
            <div className= "btn-group">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
                    Delete
            </button>
            </form>
            </div>
            </div>
            </div>
            <hr />
                <h2>Comments</h2>
                {comments}
            <hr />
            <h2>Got Your Own Rant or Rave?</h2>
            <form method="POST" action = {`/places/${data.place.id}/comment`}>
                <div className="row">
                <div className="form-group col-sm-12">
                <label htmlFor="content">Content</label>
                <input className="form-control" id="content" name="content" type="textarea" />
                </div>
                </div>
                <div className="row">
                <div className = "form-group col-sm-4">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id = "author" name = "author" />
                </div>
                <div className = "form-group col-sm-4">
                    <label htmlFor="star">Star Rating</label>
                    <input className="form-control" id="star" name="star" type="range" step=".5" min="0" max="5" />
                </div>
                <div className = "form-group col-sm-2">
                    <label htmlFor="rant">Rant</label>
                    <input className="form-control" id="rant" name="rant" type="checkbox" />
                </div>
                </div>

                <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
          </main>
        </Def>
        
    )
}

let rating = (
  <h3 className="inactive">
    Not yet rated
  </h3>
)

module.exports = show


