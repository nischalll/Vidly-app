import React from "react";
import MoviesTable from "../moviesTable";
import Like from "./like";
class TableBody extends React.Component {
  render() {
    const { data, onDelete } = this.props;
    return (
      <tbody>
        {data.map(movie => (
          <tr>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like/></td>
            <td><button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
