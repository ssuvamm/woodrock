const LeadershipDetails = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-600">
            Visionary Leadership, Driving Success
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            At Woodrock, our success is driven by a team of visionary leaders
            who possess a profound understanding of the BPO industry and a
            passion for innovation. Their strategic guidance and unwavering
            commitment to excellence have propelled us to the forefront of the
            industry.
          </p>
          <div className="grid grid-cols-1 gap-8 md:flex md:justify-center md:gap-12">
            <div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Navneet Agarwal
              </h3>
              <p className="mb-4 text-white">COO of Woodrock Group</p>
              <p className="text-white">navneet@woodrockgroup.in</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Yogesh Mishra</h3>
              <p className="mb-4 text-white">CTO of Woodrock Group</p>
              <p className="text-white">yogesh@woodrockgroup.in</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Pragya Mishra</h3>
              <p className="mb-4 text-white">CMO of Woodrock Group</p>
              <p className="text-white">pragyamishra@woodrockgroup.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipDetails;
