import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import { useForm, usePage } from "@inertiajs/react";
import { toast, Toaster } from "sonner";
import Swal from "sweetalert2";

export default function Slider({ slides }) {
    const [showForm, setShowForm] = useState(false);
    const { props } = usePage();
    const flash = props?.flash || {};
    const [editingSlide, setEditingSlide] = useState(null);

    const { data, setData, post, transform, delete: destroy, reset, processing, errors } = useForm({        
        title: "",
        description: "",
        button_text: "",
        button_link: "",
        order: "",
        image: null,
    });

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ["image/jpeg", "image/png"];
            if (!allowedTypes.includes(file.type)) {
                toast.error("Only JPG and PNG formats are allowed.");
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                toast.error("Image size must be less than 2MB.");
                return;
            }
            setData("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleEdit = (slide) => {
        setEditingSlide(slide);
        setData({
            title: slide.title,
            description: slide.description,
            button_text: slide.button_text,
            button_link: slide.button_link,
            order: slide.order,
            image: null,
        });
        setPreview(slide.image_url);
        setShowForm(true);
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
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("slider.destroy", id), {
                    onSuccess: () => {
                        Swal.fire("Deleted!", "Your slide has been deleted.", "success");
                    },
                });
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingSlide) {
            // POST + _method spoofing so the file is parsed by PHP
            transform((formData) => ({ ...formData, _method: "put" }));
            post(route("slider.update", editingSlide.id), {
                forceFormData: true,
                onSuccess: () => {
                    reset();
                    setPreview(null);
                    setShowForm(false);
                    setEditingSlide(null);
                },
                onError: (errors) => console.log("Update error:", errors),
            });
        } else {
            // clear the transform so store doesn't send _method
            transform((formData) => formData);
            post(route("slider.store"), {
                forceFormData: true,
                onSuccess: () => {
                    reset();
                    setPreview(null);
                    setShowForm(false);
                },
            });
        }
    };

    return (
        <Dashboard title="Manage Sliders" description="">
            <Toaster position="top-right" richColors />

                <button
                    className="bg-green-600 text-white my-4 px-4 py-2 rounded hover:bg-green-700 transition mb-4"
                    onClick={() => {
                        setShowForm(!showForm);
                        setEditingSlide(null);
                        reset();
                        setPreview(null);
                    }}
                >
                    {showForm ? "Close Form" : "+ Add New Slide"}
                </button>


            {showForm && (
                    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Title</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                    maxLength={50}
                                    required
                                />
                                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Description</label>
                                <textarea
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    rows="3"
                                    maxLength={200}
                                    required
                                ></textarea>
                                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Button Text</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={data.button_text}
                                    onChange={(e) => setData("button_text", e.target.value)}
                                    maxLength={30}
                                    placeholder="e.g., Get Quote"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Button Link</label>
                                <input
                                    type="url"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={data.button_link}
                                    onChange={(e) => setData("button_link", e.target.value)}
                                    placeholder="https://example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Order</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={data.order}
                                    onChange={(e) => setData("order", e.target.value)}
                                    min="1"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300">Image (1200x400, Max 2MB, JPG/PNG)</label>
                                <input type="file" className="w-full px-3 py-2 border rounded-lg" onChange={handleImageChange} />
                                {preview && <img src={preview} alt="Preview" className="mt-3 w-40 h-auto rounded-lg" />}
                            </div>

                            <div className="flex space-x-3">
                                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg">
                                    {processing ? "Saving..." : editingSlide ? "Update Slide" : "Save Slide"}
                                </button>
                                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}


            <div className="">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mt-6">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Image</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Title</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Button Text</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Button Link</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Order</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
    {slides?.map((slide) => (
        <tr key={slide.id} className="border border-gray-300 dark:border-gray-700">
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                <img src={slide.image} alt={slide.title} className="w-40 h-auto rounded-sm" />

            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{slide.title}</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{slide.description}</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{slide.button_text}</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                <a href={slide.button_link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    {slide.button_link}
                </a>
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{slide.order}</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleEdit(slide)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(slide.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </td>

        </tr>
    ))}
</tbody>

                </table>

            </div>
        </Dashboard>
    );
}
