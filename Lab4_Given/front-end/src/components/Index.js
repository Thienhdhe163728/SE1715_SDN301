import { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
const Index = () => {
    const [genre, setGenre] = useState([]);
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/genre")
            .then((resp) => resp.json())
            .then((data) => {
                setGenre(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    useEffect(() => {
        fetch("http://localhost:9999/movie")
            .then((resp) => resp.json())
            .then((data) => {
                setMovie(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <Row>
            <Col>
                <Row>
                    <Col style={{ textAlign: "center" }}>
                        <h2>List of movie</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>.ID</th>
                                    <th>Title</th>
                                    <th>Year</th>
                                    <th>Genre</th>
                                    <th>About</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movie.map((p) => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.year}</td>
                                        <td>{genre.map((c) => (c.id === p.genre ? c.name : ""))}</td>
                                        <td><button className="btn btn bg-success">Change</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default Index;