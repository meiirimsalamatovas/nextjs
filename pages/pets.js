import fetch from "isomorphic-unfetch";
import { Layout } from "../components/Layout";

function Pets({ pets }) {
  if (!Array.isArray(pets)) {
    return <div>Ошибка: не удалось загрузить питомцев</div>;
  }

  return (
    <Layout>
      <div>
        <h1>Pets!</h1>
        <ul>
          {pets.map(pet => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

Pets.getInitialProps = async function() {
  const res = await fetch(`http://pet-library.moonhighway.com/api/pets`);
  const data = await res.json();
  console.log(data); 
  return {
    pets: data.pets || []  };
};

export default Pets;
