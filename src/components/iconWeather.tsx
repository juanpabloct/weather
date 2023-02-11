export const IconWeather = ({ img, alt }: { img: string; alt: string }) => {
  const linkUrl = `https://openweathermap.org/img/wn/${img}@2x.png`;
  return <img className="w-10 h-8 " src={linkUrl} alt={alt} />;
};
