import { Button } from "./ui/Button";

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="mt-20 flex items-center justify-center md:mt-36">
        <h1 className="font-mono text-4xl font-bold tracking-tight text-orange-300 md:text-6xl">
          Hire Me
        </h1>
      </div>
      <div className="container mx-auto mt-16 grid h-full w-full grid-rows-1 gap-4 px-4 md:mt-32 md:grid-cols-2">
        <Form />
        <Email />
      </div>
    </div>
  );
};

export default Contact;

const Form = () => {
  return (
    <div className="relative order-2 mx-auto mt-10 w-5/6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl md:order-1 md:mt-0 md:w-1/2 md:p-10">
      <form action="submit">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-md font-mono text-white/80 md:text-xl"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-md font-mono text-white/80 md:text-xl"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-md font-mono text-white/80 md:text-xl"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 focus:outline-none"
              rows={3}
            />
          </div>
          <Button />
        </div>
      </form>
      <div className="absolute inset-0 -z-10 bg-orange-300/10 blur-3xl" />
    </div>
  );
};

const Email = () => {
  return (
    <div className="order-1 mx-auto flex items-center md:order-2">
      <div className="flex flex-col gap-2 rounded-2xl border-4 border-dotted border-orange-200/60 p-4 md:gap-4 md:p-8">
        <div className="flex justify-center gap-2 font-mono text-xl font-semibold text-orange-200/30 md:text-4xl">
          <h1>91+</h1>
          <h1>6374364766</h1>
        </div>
        <div className="font-mono text-xl font-semibold text-orange-200/30 md:text-4xl">
          <h1>jackwaghan@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};
