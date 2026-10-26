import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import Swal from "sweetalert2";

// Simple 5-star rating component
function StarRating({ value, onChange }) {
    return (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    onClick={() => onChange(star)}
                    className={`w-6 h-6 cursor-pointer ${value >= star ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
            ))}
        </div>
    );
}

export default function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({
        name: "",
        category_id: "",
        price: "",
        discount: "",
        description: "",
        image: null,
        rating: 0,
        is_best_seller: false,
        is_popular: false,
        tags: [],
    });

    useEffect(() => {
        fetchAll();
        fetchCategories();
    }, []);

    const fetchAll = async () => {
        const [prod, cats, tagList] = await Promise.all([
            axios.get("/admin/api/products"),
            //axios.get("/admin/api/pages/categories"),
            axios.get("/admin/api/categories"),
            //axios.get("/admin/api/pages/tags"),
            axios.get("/admin/api/tags"),
        ]);
        setProducts(prod.data);
        setCategories(cats.data);
        setTags(tagList.data);
    };

    const fetchCategories = async () => {
        const res = await axios.get("/admin/api/categories");
        setCategories(res.data);
    };

    const handleShowForm = (product = null) => {
        setEditing(product);
        setForm(
            product
                ? {
                      ...product,
                      image: null, // reset image for editing
                      tags: product.tags.map((t) => t.id),
                  }
                : {
                      name: "",
                      category_id: "",
                      price: "",
                      discount: "",
                      description: "",
                      image: null,
                      rating: 0,
                      is_best_seller: false,
                      is_popular: false,
                      tags: [],
                  }
        );
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditing(null);
        setForm({
            name: "",
            category_id: "",
            price: "",
            discount: "",
            description: "",
            image: null,
            rating: 0,
            is_best_seller: false,
            is_popular: false,
            tags: [],
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && name === "tags") {
            setForm((prev) => ({
                ...prev,
                tags: checked
                    ? [...prev.tags, parseInt(value)]
                    : prev.tags.filter((id) => id !== parseInt(value)),
            }));
        } else if (type === "checkbox") {
            setForm((prev) => ({ ...prev, [name]: checked }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleImageChange = (e) => {
        setForm((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleRatingChange = (star) => {
        setForm((prev) => ({ ...prev, rating: star }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (key === "tags") {
                value.forEach((tagId) => data.append("tags[]", tagId));
            } else if (key === "image") {
                if (value) {
                    data.append("image", value);
                }
                // Do NOT append image if value is null or undefined
            } else if (key === "is_best_seller" || key === "is_popular") {
                data.append(key, value ? 1 : 0);
            } else {
                data.append(key, value);
            }
        });



        if (editing) {
            await axios.post(`/admin/api/products/${editing.id}?_method=PUT`, data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        } else {
            await axios.post("/admin/api/products", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        }
        fetchAll();
        handleCloseForm();
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            reverseButtons: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/admin/api/products/${id}`);
                    fetchAll();
                    Swal.fire("Deleted!", "Your product has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Failed to delete the product.", "error");
                }
            }
        });
    };

    return (
        <Dashboard title="Manage Products" description="">

                <button
                    className="bg-green-600 text-white my-4 px-4 py-2 rounded hover:bg-green-700 transition"
                    onClick={() => handleShowForm()}
                >
                    {showForm ? "Close Form" : "+ Add New Product"}
                </button>


            {showForm && (
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Category</label>
                                <select
                                    name="category_id"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={form.category_id}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((c) => (
                                        <option key={c.id} value={c.id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={form.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Discount</label>
                                <input
                                    type="number"
                                    name="discount"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={form.discount}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    required={!editing}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Tags</label>
                                <div className="flex flex-wrap gap-2 items-center">
                                    {tags.map((tag) => (
                                        <label key={tag.id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="tags"
                                                value={tag.id}
                                                checked={form.tags.includes(tag.id)}
                                                onChange={handleChange}
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">{tag.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="is_best_seller"
                                        checked={form.is_best_seller}
                                        onChange={handleChange}
                                    />
                                    <span className="text-gray-700 dark:text-gray-300">Best Seller</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="is_popular"
                                        checked={form.is_popular}
                                        onChange={handleChange}
                                    />
                                    <span className="text-gray-700 dark:text-gray-300">Popular</span>
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Rating</label>
                                <StarRating value={form.rating} onChange={handleRatingChange} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">Description</label>
                            <Editor
                                apiKey="nd1cpj9d1sncp7xkpggqcggqs7vdezvbzk75u17ls30hectv"
                                value={form.description}
                                init={{
                                    height: 200,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link charmap preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor | ' +
                                        'alignleft aligncenter alignright alignjustify | ' +
                                        'bullist numlist outdent indent | removeformat | help'
                                }}
                                onEditorChange={content =>
                                    setForm(prev => ({ ...prev, description: content }))
                                }
                            />
                        </div>
                        <div className="flex space-x-3">
                            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg">
                                {editing ? "Update" : "Add Product"}
                            </button>
                            <button
                                type="button"
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                                onClick={handleCloseForm}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 mt-6">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Image</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Product Title</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Category</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Price</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Discount</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Rating</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Best Seller</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Popular</th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.id} className="border border-gray-300 dark:border-gray-700">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                        <img
                                            src={`${p.image}`}
                                            alt={p.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{p.name}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{p.category?.name}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{p.price}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{p.discount}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{p.rating}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{p.is_best_seller ? "Yes" : "No"}</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{p.is_popular ? "Yes" : "No"}</td>

                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2"
                                            onClick={() => handleShowForm(p)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded-lg"
                                            onClick={() => handleDelete(p.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </Dashboard>
    );
}
