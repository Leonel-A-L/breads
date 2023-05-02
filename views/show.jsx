const  React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
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
            <li>
                <a href={'/breads'}>Go Home</a>
            </li>
            
        </Default>
    )
}

module.exports = Show