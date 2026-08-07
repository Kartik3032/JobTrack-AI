import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <div className="flex items-center justify-center h-[80vh]">
                <h1 className="text-6xl font-bold text-white">
                    JobTrack AI 🚀
                </h1>
            </div>
        </div>
    );
}

export default Home;