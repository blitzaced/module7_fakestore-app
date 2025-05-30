import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        image: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setFormData(res.data))
            .catch(() => setError("Failed to fetch product data."));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://fakestoreapi.com/products/${id}`, formData);
            setSubmitted(true);
            setError(null);
            // Optionally redirect
            // navigate("/products");
        } catch (error) {
            setError("Failed to update product.");
            setSubmitted(false);
        }
    };

    return (
        <Container className="mt-5">
            <h2>Edit Product</h2>
            {submitted && <Alert variant="success" dismissible>Product updated successfully!</Alert>}
            {error && <Alert variant="danger" dismissible>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <FormFields formData={formData} handleChange={handleChange} />
                <Button variant="primary" type="submit">Update Product</Button>
            </Form>
        </Container>
    );
}

function FormFields({ formData, handleChange }) {
    return (
        <>
            {/* Title */}
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter new title" name="title" value={formData.title} onChange={handleChange} required />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter new description" name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>

            {/* Category */}
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Enter new category" name="category" value={formData.category} onChange={handleChange} required />
            </Form.Group>

            {/* Price */}
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter new price" name="price" value={formData.price} onChange={handleChange} required />
            </Form.Group>

            {/* Imafe URL */}
            <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Enter new image URL" name="image" value={formData.image} onChange={handleChange} required />
            </Form.Group>
        </>
    );
}

export default EditProduct;
