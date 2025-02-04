export default async function getPost(id){
    const result = await fetch(`http://localhost:3000/post/${id}`); // Fetch specific post by id
    return result.json(); // Return the result in json format because we get string from fetch
    // return await result.json(); //both are same
}