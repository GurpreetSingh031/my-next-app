import { useRouter } from 'next/router';
import { fetchItems } from '../../lib/api';

const ItemDetail = ({ item }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <img src={item.image} alt={item.title} className="mb-4 rounded"/>
      <p className="text-gray-600 mb-4">{item.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const items = await fetchItems();
  const paths = items.map(item => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const items = await fetchItems();
  const item = items.find(item => item.id.toString() === params.id);

  return { props: { item } };
}

export default ItemDetail;
