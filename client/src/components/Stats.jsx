function Stats() {
    return (
        <section className="bg-zinc-950 text-white py-20">

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10">

                <div>
                    <h2 className="text-5xl font-bold text-purple-500">500+</h2>
                    <p className="mt-3 text-gray-400">Students</p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold text-purple-500">1000+</h2>
                    <p className="mt-3 text-gray-400">Applications Tracked</p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold text-purple-500">95%</h2>
                    <p className="mt-3 text-gray-400">Interview Success</p>
                </div>

            </div>

        </section>
    );
}

export default Stats;