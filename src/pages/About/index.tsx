import * as React from 'react';
import useFetch from 'hooks/useFetch';
import { IUser } from 'hooks/interfaces';

export interface IAboutProps {
}

export default function About (props: IAboutProps) {

  const [{response, isLoading, error}, doFetch] = useFetch("https://jsonplaceholder.typicode.com/users")

React.useEffect(()=>{
  doFetch()
}, [doFetch])

  if (!response && isLoading)  return <p>loading</p>

  if (error) return <p>{error}</p>
  
  return (
    <div className="col-lg-10">
      <table className="table table-hover table-sm table-responsive">
        <thead className="thead-light">
          <tr>
            <th scope="col">№:</th>
            <th scope="col">Псевдоним:</th>
            <th scope="col">Полное имя:</th>
            <th scope="col">Email:</th>
            <th scope="col">Телефон:</th>
            <th scope="col">Сайт:</th>
          </tr>
        </thead>
        <tbody>
          {response.map((item: IUser, index: number)=>
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td><a href={`https://${item.website}`}>{item.website}</a></td>
          </tr>)} 
        </tbody>
      </table>
    </div>
  );
}
