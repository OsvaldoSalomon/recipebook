import React from 'react';

function ErrorMessage({ message }) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 my-3 px-2 py-1 rounded-xl relative" role="alert">
            <span className="block sm:inline text-xs text-center"> {message}</span>
        </div>
    );
}
export default ErrorMessage;