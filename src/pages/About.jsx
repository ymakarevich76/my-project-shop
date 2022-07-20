import { useNavigate } from "react-router-dom";

function About () {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="container about-us">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis ex soluta earum optio. Natus, rerum quia. Recusandae minima et voluptatum pariatur quo, deleniti asperiores rerum commodi iure perspiciatis atque!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis ex soluta earum optio. Natus, rerum quia. Recusandae minima et voluptatum pariatur quo, deleniti asperiores rerum commodi iure perspiciatis atque!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis ex soluta earum optio. Natus, rerum quia. Recusandae minima et voluptatum pariatur quo, deleniti asperiores rerum commodi iure perspiciatis atque!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis ex soluta earum optio. Natus, rerum quia. Recusandae minima et voluptatum pariatur quo, deleniti asperiores rerum commodi iure perspiciatis atque!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis ex soluta earum optio. Natus, rerum quia. Recusandae minima et voluptatum pariatur quo, deleniti asperiores rerum commodi iure perspiciatis atque!</p>

            <button onClick={goBack} className='btn purple darken-1'>
                Go back
            </button>
        </div>
    )
}

export {About}