// hook useParams() is used grab/route parameters from the Route
// const {id} = is used to destructure the Route params


import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    return (
        <div className="blog-details">
            <h2>Blog details - { id }</h2>
        </div>
    );
}

export default BlogDetails;