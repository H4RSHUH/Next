import axios from "axios";

async function getTodo(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
}

export default async function Todo() {
    const blogs = await getTodo();

    return <div>
        <div>
            {blogs.map((blog: iTodo) =>{
                return <Todos title={blog.title} completed={blog.completed} /> 
            })}
        </div>
    </div>
}

interface iTodo {
    title: string;
    completed: boolean;
}

function Todos({title, completed}: iTodo){
        return <div>
            {title } {completed ? "Done" : "Not Done"}
        </div>
}