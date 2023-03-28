import AuthModal from '../components/AuthModal'
import BoardHeader from '../components/BoardHeader'
import Header from '../components/Header'
import PostForm from '../components/PostForm'

export default function IndexPage() {
    return(
        <div className=''>
        <AuthModal/>
        <BoardHeader />
        <PostForm />
        <div className="px-6 text-reddit_text mb-4">
          <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
            <h5 className='text-reddit_text-darker mb-1 text-sm'>Posted by thinhtu 5 hours ago</h5>
            <h2 className='text-2xl mb-3'>Open up the sky</h2>
            <div className='text-sm leading-6'>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada metus a ex pulvinar gravida. Sed sed tincidunt purus, at gravida dui. Vestibulum tincidunt dui non pellentesque egestas. Nunc aliquam congue eros, ut dignissim arcu mattis elementum. Suspendisse nec tristique eros. Aenean velit elit, vestibulum eget congue non, porttitor vel lectus. Quisque velit dolor, finibus luctus odio feugiat, luctus elementum urna. Nulla iaculis ligula enim, eget pretium ligula faucibus id. Donec non consequat nisi, ut auctor orci. Morbi neque risus, tempus nec ante at, consectetur vulputate eros. Integer sit amet efficitur mauris. Sed bibendum, sem a pellentesque tristique, leo arcu vulputate felis, sed ultrices massa enim at est. Ut viverra tortor orci, nec placerat purus accumsan nec. Nunc et sapien blandit, viverra nisl a, imperdiet eros. Vestibulum consectetur enim tellus, eget pulvinar lacus vestibulum sed. Quisque vel nunc magna.
              Phasellus luctus nisl non libero finibus, eu vulputate sem sagittis. Nulla eu sapien eget turpis molestie pulvinar. Proin ac metus blandit, placerat odio quis, ullamcorper justo. Duis a felis a lorem ullamcorper maximus. Donec a felis non mi condimentum tristique. Curabitur laoreet, lorem non semper semper, leo metus lacinia ligula, in molestie orci metus eget turpis. Aliquam sed mauris non mi viverra rutrum. Nullam a mauris orci. Curabitur porttitor malesuada rhoncus. Nunc lacinia tincidunt aliquam. In placerat diam vel felis efficitur, ut cursus nunc auctor.
              Nullam dictum justo eu massa rutrum, at finibus arcu dictum. Suspendisse potenti. Nunc efficitur felis vitae nulla dapibus fringilla. Nunc sapien neque, fermentum quis neque ac, gravida ultrices sapien. Nam eu mi cursus, consectetur leo pellentesque, ornare enim. Integer rhoncus nisi velit, non dapibus dolor euismod nec. Cras leo augue, finibus ac sapien a, interdum finibus neque.
            </p>
            </div> 
          </div>
        </div>
      </div>
    )
}