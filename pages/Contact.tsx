import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div id="contact" className="container mx-auto px-4 py-12 max-w-3xl">
    <h2 className="text-2xl font-semibold text-center mb-8">CONTACT</h2>
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
              placeholder="Entrez votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
              placeholder="Entrez votre e-mail"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
            placeholder="Entrez votre message"
          />
        </div>
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md hover:from-purple-500 hover:to-blue-500 focus:outline-none"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
