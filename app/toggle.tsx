import {useState, useEffect} from "react";
import './css/toggle.css';

export default function Toggle() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setwindowWidth] =useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType]);

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize)
        }
    },[]);

    return (
        <div className="nav">
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments </button>
            </div>
            <h1>Jason data for {resourceType}:</h1>
            {items.map(item => {
                return <pre key="item.userId">{JSON.stringify(item)}</pre>
            }).slice(0,5)}
            <p>Your current window width is: {windowWidth}</p>
        </div>
    );

}