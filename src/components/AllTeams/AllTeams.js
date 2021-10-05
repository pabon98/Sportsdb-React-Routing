import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./AllTeams.css"

const AllTeams = () => {
    const [teams,setTeams] = useState([])
    const [searchText , setSearchText] = useState('')
    useEffect( ()=>{
        fetch(
          `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
        )
          .then((res) => res.json())
          .then((data) => setTeams(data.teams));
    },[searchText])
    const handleOnChange = e=>{
       const inputValue =  e.target.value
       setSearchText(inputValue)
       console.log(inputValue);
    }
    
    return (
      <div className="team-container">
        <h1>Our Teams</h1>
        <div className="search-box">
          <input
            onChange={handleOnChange}
            className="p-2 w-25"
            type="text"
            placeholder="Search team"
          />
          <button className="btn btn-danger ms-1 px-3 py-2">Search</button>
          <div className="teams">
            <div className="row">
              {teams?.map((team) => (
                <div className="col-md-4">
                  <div className="cart">
                    <div className="logo-image">
                      <img className="w-50" src={team.strTeamBadge} alt="" />
                      {/* <p>{team.idTeam}</p> */}
                      <h1>{team.strTeam}</h1>
                      <p>{team.strLeague}</p>
                      <p>{team.strCountry}</p>
                      <p>{team.strGender}</p>
                      <Link to={`/details/${team.idTeam}`}>
                        <button className="btn btn-success">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllTeams;