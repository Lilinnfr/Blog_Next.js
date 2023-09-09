import React from 'react'


export default function blog(props) {

    console.log(props);

  return (
    <div>Blog!</div>
  )
}

export async function getStaticProps() {

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await posts.json()
    console.log(data);

    return {
        props: {
            data
        }
    }
}
