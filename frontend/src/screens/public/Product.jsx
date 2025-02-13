import { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Badge, Card } from "react-bootstrap";

import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Meta from "../../components/Meta";

const Product = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(id);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (product && product.reviews) {
      setReviews(product.reviews);
    }
  }, [product]);

  return (
    <Fragment>
      <Meta title={product?.name} />
      <Link to={"/"} className="btn btn-light my-3">
        Go Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <Fragment>
          <Row>
            <Col lg={6}>
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="rounded-3 img-fluid"
                />
              </div>
            </Col>
            <Col lg={6} className="product-meta-data">
              <ListGroup variant="flush" className="rounded-3 mt-3 mt-lg-0">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                  <Badge className="bg-dark">{product.brand}</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>{product.category}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={
                      product.numReviews > 1
                        ? `${product.numReviews} reviews`
                        : `${product.numReviews} review`
                    }
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>{product.description}.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Price:<strong className="ms-2">${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status:
                      <strong className="ms-2">
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title as="h3">Reviews</Card.Title>
                  {reviews.length === 0 && (
                    <Message variant="secondary">No reviews.</Message>
                  )}
                  <ListGroup variant="flush" className="mt-2">
                    {reviews.map((review) => (
                      <ListGroup.Item
                        key={review._id}
                        className="rounded review"
                      >
                        <strong>{review.user}</strong>{" "}
                        {/* Display the username */}
                        <Rating value={review.rating} />
                        <p>{new Date(review.date).toLocaleDateString()}</p>
                        <p>{review.text}</p>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Product;
