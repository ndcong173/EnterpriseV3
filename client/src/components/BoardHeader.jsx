export default function BoardHeader() {
    return (
        <>
            <div className="h-40 bg-fixed bg-[url('https://c1.wallpaperflare.com/preview/495/109/110/orange-texture-texture-wall-background.jpg')]" >
            </div>
            <div className=' bg-reddit_dark-brighter'>
                <div className="mx-6 relative flex">
                    <div className='h-20 w-20 rounded-full overflow-hidden relative -top-4 border-3 border-white bg-white'>
                        <img src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg" alt="" />
                    </div>
                    <div className='pt-2 pl-4'>
                        <h1 className='text-gray-300 text-3xl'>Washdish</h1>
                        <h5 className='text-gray-500'>r/Here come the party</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
