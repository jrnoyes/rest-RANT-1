const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            
          <main>
            <h1>{data.place.name}</h1>
            <img src = {data.place.pic} />
            <div>
                <h3>Rating</h3>
                <p>Not Rated</p>
            </div>
            <div>
                <h3>Description</h3>
                {data.place.city}, {data.place.state}
            </div>
            <div>
                <h3>Cuisines</h3>
                {data.place.cuisines}
            </div>
            <div class= "btn-group">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
            </div>  
          </main>
        </Def>
        
    )
}

module.exports = show
