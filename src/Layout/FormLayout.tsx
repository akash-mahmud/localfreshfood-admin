import React from 'react'

export default function FormLayout({ children }: { children:JSX.Element }) {
    return (
      <div className="bg-white p-6 dark:bg-gray-700 shadow-md">
        {children}
      </div>
    );
}
