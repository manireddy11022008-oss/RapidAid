function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[500px]">

        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          Contact RapidAid
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;