import { Pokemon } from "../App"

const ListPokemon = ({pokemons}: Pokemon) => {

    const renderList = () => {
        return pokemons.map(pokemon => {
            return (
                <li key={pokemon.name} className="list-item">
                    {pokemon.name}
                </li>
            )
        })
    }

    return(
        <div className="pokeball">
            <ul className="list">
                {renderList()}
            </ul>
        </div>
    )
}

export default ListPokemon