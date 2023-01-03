import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.APP_API_KEY}&number=9`);
  // const data = await api.json();
  // console.log(data);


  return (
      <><h1 className="text-3xl font-bold underline">
          Hello world!
      </h1></>
  )
}
