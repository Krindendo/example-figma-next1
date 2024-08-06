import { ImageWrapper } from "./_components/ImageWrapper";

export default function Galerija() {
  return (
    <>
      <section className="container">
        <h1 className="p-10 font-bold text-4xl mt-10">
          Jedinstveni odnos vrhunskog kvaliteta
        </h1>
        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 relative">
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0003.jpg"
            className="md:col-span-2"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0004.jpg"
            className="col-span-1"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/20240513_191017.jpg"
            className="col-span-1"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0005.jpg"
            className="md:col-span-2"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0006.jpg"
            className="md:col-span-2"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0019.jpg"
            className="col-span-1"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0022.jpg"
            className="col-span-1"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/20240513_190904.jpg"
            className="col-span-1"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0018.jpg"
            className="col-span-1"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0017.jpg"
            className="md:col-span-2"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/hrana/IMG-20240621-WA0008.jpg"
            className="col-span-1"
            alt="hrana"
          />
          <ImageWrapper
            src="/images/20240604_162920.jpg"
            className="col-span-1"
            alt="restoran"
          />
          <ImageWrapper
            src="/images/restoran1.jpg"
            className="md:col-span-2"
            alt="restoran"
          />
        </div>
      </section>
    </>
  );
}
