import { format } from "date-fns";

export default function PostContent(props) {
    return (
        <div>
            {props.author && props.postAt && (
                <div className='text-reddit_text-darker mb-1 text-sm'>
                    Posted by {props.author.name} on {format(new Date(props.postAt), "MM/dd/yyyy 'at' h:mm a")}
                </div>
            )}
            <h2 className='text-2xl mb-3'>{props.title}</h2>
            <div className='text-sm leading-6'>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}