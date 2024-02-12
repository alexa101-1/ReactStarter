import {useState} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
// whenever you have to render a list you need a key in order to keep track of the items
const Home = () => {
    const [name, setName] = useState("mario");
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs") // this could have been
    //written as an array as well not necessarily as an object

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }

    // this will run at every render!! any time the data changes
    // when you want to fire this up only in certain renders you can create a
    // dependency array that you pass to the function


    // res is not the fetched data but a response object with which we have to do sth in order to get the data
    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending  && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"AllBlogs!"}/>}
            <button onClick={() => setName("luigi")}>change name</button>
            <p>{ name }</p>
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === "mario")}*/}
            {/*          title={"Mario's blogs!"} handleDelete={handleDelete}/>*/}
        </div>
    );

    // const [name, setName] = useState("mario");
    // const [age, setAge] = useState(25)
    // const handleClick = () => {
    //     setName("luigi");
    //     setAge(30);
    // }
    //
    // const handleClickAgain = (name) => {
    //     console.log("Hello " + name);
    // }

    // return(
    //     <div className="home">
    //         <h2>HomePage</h2>
    //         <p>{ name } is { age } years old</p>
    //         <button onClick={handleClick}>Click me</button>
    //         <button onClick={() => handleClickAgain("mario")}>Click me again</button>
    //     </div>

    // );
}

export default Home;