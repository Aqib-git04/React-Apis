// Modal.js
import React from 'react';

function Modal({ title, ingredients, instructions, image, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                <button className="cursor-pointer absolute right-0 -top-14 text-black bg-white w-[31px] p-2" onClick={onClose}>
                    X
                </button>
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-2">
                    <strong>Ingredients:</strong> {ingredients.join(', ')}
                </p>
                <p className="text-gray-700">
                    <strong>Instructions:</strong> {instructions}
                </p>
            </div>
        </div>
    );
}

export default Modal;
