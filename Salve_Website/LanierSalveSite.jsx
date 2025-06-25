export default function LanierSalvesSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-green-100 p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Lanier's Herbal Salves</h1>
        <p className="text-center text-lg mt-2 italic">
          "We make herbal salves that work with your body—not against it."
        </p>
        <nav className="mt-4 flex justify-center space-x-6 text-sm font-medium">
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#connect" className="hover:underline">Connect</a>
          <a href="#cart" className="hover:underline">Cart</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="p-8 text-center bg-green-50">
        <h2 className="text-3xl font-semibold mb-4">Handcrafted in New Mexico</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Each product is made in small batches using time-tested herbs, quality oils, and no shortcuts. Whether you're winding down after a hike, tending your garden, or just taking care of your skin—we’ve got a salve for that.
        </p>
      </section>

      {/* Products Section */}
      <section id="shop" className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold mb-2">BioBalm</h3>
          <p className="mb-2 text-sm text-gray-700">
            A plant-based balm infused with calendula, comfrey, and plantain—crafted to support the skin’s natural healing process.
          </p>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-xl">Add to Cart</button>
        </div>
        <div className="border p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold mb-2">Muscle Mud</h3>
          <p className="mb-2 text-sm text-gray-700">
            Herbal muscle salve made with arnica and cayenne for tired bodies and long days.
          </p>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-xl">Add to Cart</button>
        </div>
        <div className="border p-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold mb-2">Butter Fingers</h3>
          <p className="mb-2 text-sm text-gray-700">
            Rich, nourishing body butter with shea, almond, and cocoa butter to lock in moisture without the greasy finish.
          </p>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-xl">Add to Cart</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-green-100">
        <h2 className="text-2xl font-semibold mb-4 text-center">About Us</h2>
        <p className="max-w-2xl mx-auto text-center text-lg">
          Rooted in tradition, guided by nature. Our products are made simply, honestly, and with care—from one New Mexican to another. Lanier's Herbal Salves is a one-person passion project built from the ground up with a deep love for herbal remedies and sustainable living.
        </p>
      </section>

      {/* Connect Section */}
      <section id="connect" className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
        <p className="mb-4">Follow along or reach out—we’d love to hear from you!</p>
        <div className="flex justify-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="mailto:info@laniersalves.com" className="hover:underline">Email</a>
        </div>
      </section>

      {/* Cart Placeholder */}
      <section id="cart" className="p-8 bg-green-50 text-center">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <p className="text-sm text-gray-600">(Cart functionality coming soon)</p>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Lanier's Herbal Salves. All rights reserved.
      </footer>
    </div>
  );
}
