export default function Button(props) {
    let classNames = 'border border-gray-300 rounded-full px-3 font-bold sefl-center py-1 '
    if (props.outline){
        classNames += 'text-gray-300 '
    } else {
        classNames += 'bg-gray-300 text-reddit_dark '
    }
    return(
        <button  {...props} className={classNames + props.className}/>
    )
}