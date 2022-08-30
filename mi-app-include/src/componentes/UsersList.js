import { useEffect, useState } from 'react';

export default function UsersList() {

    const [users, setUsers] = useState([]);
    // const [urlusersList, setUrlusersList] = useState([])

    //Listado de useros
  useEffect(() => {
    const url = "/api/users";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setUsers(data.users)
    })
  },[]);

  return (
    <div>
      <div className="card bg-transparent pt-3">
        <div className="card-body text-light">
          <h4 className="card-title text-center">Listado de usuarixs</h4>
            <ul>
            {!users ? "cargando..." : users.map((user, index) => {
              return  (
                    <li key ={index} > {user.id + ". " + user.name} </li>
                    )
                  })}
            </ul>
          {/* <a href={urlusersList} className="btn btn-outline-secondary rounded-0 w-50 text-center">Ir a Listado de usuarixs</a> */}
        </div>
      </div>
    </div>
  )

}