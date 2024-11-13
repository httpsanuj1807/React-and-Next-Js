export default function BlogPost({ params }){

    console.log(params);   // { slug: 'post-2' }

    return(
        <main>
            <p>Blog post - {params.slug}</p>
        </main>
    )

}