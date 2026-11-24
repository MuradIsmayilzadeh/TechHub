import dbConnect from "../api/connecttodb";
import Product from "../api/Product";

export const sampleProducts = [
  { _id: "iphone-15-pro", name: "iPhone 15 Pro", price: 2499, category: "Telefon", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=70", description: "Titan korpus, A17 Pro çipi və 48 MP əsas kamera ilə ən güclü iPhone." },
  { _id: "macbook-air-m3", name: "MacBook Air M3", price: 2799, category: "Noutbuk", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=70", description: "18 saata qədər batareya, sakit fansız dizayn və parlaq Liquid Retina ekran." },
  { _id: "airpods-pro-2", name: "AirPods Pro 2", price: 549, category: "Qulaqlıq", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=70", description: "Aktiv səs-küy ləğvi, şəffaf rejim və fərdi məkan audio." },
  { _id: "galaxy-s24", name: "Samsung Galaxy S24", price: 1899, category: "Telefon", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=70", description: "Galaxy AI funksiyaları, 120 Hz Dynamic AMOLED ekran və kompakt korpus." },
  { _id: "sony-wh1000xm5", name: "Sony WH-1000XM5", price: 799, category: "Qulaqlıq", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=70", description: "Sinifində lider səs-küy ləğvi və 30 saatlıq batareya ömrü." },
  { _id: "ipad-air", name: "iPad Air", price: 1399, category: "Planşet", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=70", description: "M2 çipi, Apple Pencil dəstəyi və 11 düymlük Liquid Retina ekran." },
  { _id: "apple-watch-9", name: "Apple Watch Series 9", price: 899, category: "Saat", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=70", description: "Daha parlaq ekran, iki toxunuş jesti və sağlamlıq izləmə funksiyaları." },
  { _id: "ps5-slim", name: "PlayStation 5 Slim", price: 1099, category: "Oyun", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=70", description: "Ultra sürətli SSD, 4K oyun təcrübəsi və DualSense idarəedicisi." },
];

export async function getProducts() {
  try {
    if (await dbConnect()) {
      const fromDb = await Product.find().lean();
      if (fromDb.length) return fromDb.map((p) => ({ ...p, _id: String(p._id) }));
    }
  } catch (error) {
    console.error("Error retrieving products:", error);
  }
  return sampleProducts;
}

export async function getProduct(id) {
  const products = await getProducts();
  return products.find((p) => p._id === id) || null;
}
