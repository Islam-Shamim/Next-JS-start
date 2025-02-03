export default async function getPost(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // Fetch all post (for limit we use"_limit=10")
    return result.json(); // Return the result in json format because we get string from fetch
    // return await result.json(); // both are same
}