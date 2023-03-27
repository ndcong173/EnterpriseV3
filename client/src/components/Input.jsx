export default function Input(props) {
    return <input {...props} className={"bg-reddit_dark-brighter text-reddit_text p-2 border border-reddit_dark-brightest rounded-full block px-4 " + props.className} />
}