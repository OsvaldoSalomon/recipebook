'use client'
import "./globals.css";

// export const metadata = {
//     title: "Recipe Book",
//     description: "List of my recipes to shopping list",
// };

export default function RootLayout({children}) {
    return (
        <html className="h-full bg-gray-100" lang="en">
        <body className="h-full">
        {children}
        </body>
        </html>
    );
}
