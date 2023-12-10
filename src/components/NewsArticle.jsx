import { Button, Card, Col } from "react-bootstrap";

export function NewsArticle(props) {
    const openFullArticle = () => {
        window.open(props.article.url, '_blank'); // Open the article URL in a new tab
    };
    return (
        <Col lg={4}>
            <Card>
                <Card.Img variant="top" src={props.article.urlToImage} />
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>
                        {props.article.description}
                    </Card.Text>
                    <Button variant="primary" onClick={openFullArticle}>Read full article</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
