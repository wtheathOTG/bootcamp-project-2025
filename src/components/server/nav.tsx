export default function Nav() {
    return (
        <div className="w-full h-screen flex justify-center pt-48 text-white">
            <div>
                <p className="text-6xl font-bold">Will Heath</p>
                <p className="text-xl pb-2">Developer & Designer</p>
                <p className="">I am developer interested in system design and user experience.</p>
                <div className="flex flex-col items-start justify-between gap-4 pt-16">
                    <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">About</a>
                    <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">Projects</a>
                    <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">Blog</a>
                    <a className="hover:translate-x-2 transition-all duration-200 ease-in-out" href="">Contact</a>
                </div>
            </div>
        </div>
    )
}