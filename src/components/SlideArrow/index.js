import "./slideArrow.css"

export default function SlideArrow (params) {
    
    return (

        <button className="slideArrow">

            {params.direction == "left" || params.direction == "L"? "<" : ">"}

        </button>
    )
}