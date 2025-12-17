import { useEffect, useState } from "react";
import initialProducts from "../data/products.json";

const STORAGE_KEY = "products";

export default function CreateProductPanel() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
    imagen: "",
  });

  // Inicializa productos desde localStorage o desde el JSON
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
      setProducts(initialProducts);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imagen" && files) {
      setForm((prev) => ({ ...prev, imagen: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProducto = {
      ...form,
      precio: Number(form.precio),
      imagen: form.imagen.name,
    };

    const updatedProducts = [...products, nuevoProducto];

    setProducts(updatedProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));

    setForm({
      nombre: "",
      precio: "",
      categoria: "",
      descripcion: "",
      imagen: "",
    });

    console.log("Producto guardado en localStorage:", nuevoProducto);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Crear producto</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Precio</label>
          <input
            type="number"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Categoría</label>
          <input
            type="text"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Imagen</label>
          <input
            type="file"
            name="imagen"
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />

          {form.imagen && (
            <p className="text-xs mt-1 text-gray-600">
              Archivo seleccionado: {form.imagen.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
        >
          Crear producto
        </button>
      </form>
    </div>
  );
}
