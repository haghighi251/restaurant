import Slider from "../components/Slider/Slider";

export default async function Home() {

  // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.APP_API_KEY}&number=9`);
  // const data = await api.json();
  // console.log(data);


  return (
      <>
          {/* Slider */}
          <Slider />
      </>
  )
}
