const  React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
    // console.log(bread)
    return(
        <Default>            
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten ? <span> does </span> : <span> doest not </span>
                }
                have gluten
            </p>
            <img src={bread.image} alt={bread.name}></img>

            <form  action={`/breads/${index}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE'></input>
            </form>
            
            <a href={'/breads'}><button>Go Home</button></a>         
                        
        </Default>
    )
}

module.exports = Show