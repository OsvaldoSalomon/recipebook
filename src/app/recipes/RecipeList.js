import React from 'react';

const products = [
    {
        id: 1,
        name: 'Pollo con champiñones',
        href: '#',
        imageSrc: 'https://kikkomanusa.com/sabor/wp-content/uploads/sites/6/2022/12/Chicken-Marsala-with-Mushrooms-IMG-8-e1670452764215-1024x779.jpg',
        imageAlt: 'Pollo con champiñones',
    },
    {
        id: 2,
        name: 'Lasagna',
        href: '#',
        imageSrc: 'https://allthehealthythings.com/wp-content/uploads/2021/12/Lasagna-5-scaled.jpg',
        imageAlt: 'Lasagna',
    },
    {
        id: 3,
        name: 'Picadillo',
        href: '#',
        imageSrc: 'https://www.cocinista.es/download/bancorecursos/recetas/receta-picadillo-mexicano.jpg',
        imageAlt: 'Picadillo',
    },
    {
        id: 4,
        name: 'Chiles en nogada',
        href: '#',
        imageSrc: 'https://aluminiomonarca.mx/cdn/shop/articles/Receta-original-de-los-chiles-en-nogada_1100x.jpg?v=1663189311',
        imageAlt: 'Chiles en nogada',
    },
    {
        id: 5,
        name: 'Tacos al pastor',
        href: '#',
        imageSrc: 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3507w.jpg',
        imageAlt: 'Tacos al pastor',
    },
    {
        id: 6,
        name: 'Wraps de pollo',
        href: '#',
        imageSrc: 'https://i.ytimg.com/vi/H8P6Lcy1cPE/maxresdefault.jpg',
        imageAlt: 'Wraps de pollo',
    },
    {
        id: 7,
        name: 'Pollo empanizado',
        href: '#',
        imageSrc: 'https://patijinich.com/es/wp-content/uploads/sites/3/2017/10/308-pollo-empanizado-con-panko-y-amaranto-con-salsa-cremosa-picante.jpg',
        imageAlt: 'Pollo empanizado',
    },
    {
        id: 8,
        name: 'Pollo a la naranja',
        href: '#',
        imageSrc: 'https://polloalanaranja.net/wp-content/uploads/2018/11/07.-salsa-de-naranja-para-pollo.jpg',
        imageAlt: 'Pollo a la naranja',
    },

]

export default function RecipeList() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
