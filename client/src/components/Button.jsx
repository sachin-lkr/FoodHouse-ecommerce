export default function Button(props){
    return(
        <div>
            <button className=" bg-gradient-to-b from-orange-400 to-orange-500 py-2.5 px-4 rounded-2xl cursor-pointer text-white transition duration-500 hover:bg-orange-600 hover:scale-105">{props.title}</button>

        </div>
    )
};