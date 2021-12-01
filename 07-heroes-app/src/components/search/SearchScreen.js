import React from 'react'
import { useForm } from '../../hooks/useForm'

export const SearchScreen = () => {

    const [formValues,handleInputChange] = useForm({searchText:""});
    const {searchText} = formValues;

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(searchText);
    }
    return (
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete ="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button 
                            className="btn btn-outline-primary mt-1 btn-block"
                            type="submit"
                        >
                            buscar...
                        </button>
                    </form>                    
                </div>
            </div>
        </>
    )
}
