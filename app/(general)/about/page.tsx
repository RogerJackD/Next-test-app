import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title about',
 description: 'SEO descriptionxd about',
 keywords: ['roger', 'prueba', 'about']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}