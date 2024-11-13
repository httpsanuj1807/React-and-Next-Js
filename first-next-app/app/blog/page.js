import Link from "next/link";

export default function Blog(){

    return (
        <main>
            <p>Blog page</p>
            <p><Link href='/blog/post-1'>Blog Post 1</Link></p>
            <p><Link href='/blog/post-2'>Blog Post 2</Link></p>
        </main>
    )

}